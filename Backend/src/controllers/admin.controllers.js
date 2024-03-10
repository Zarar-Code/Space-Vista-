import { asyncHandlder } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from '../models/admin.models.js'
import { User } from "../models/user.models.js";

import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const admin = await Admin.findById(userId);
    const accessToken = await admin.generateAccessToken();
    const refreshToken = await admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};


const adminRegister = asyncHandlder(async (req, res) => {
    //--------Get admin details from frontend
    const { username, fullName, email, password } = req.body;
    // console.log( username, email, fullName, password)
  
    //--------Validation - not empty
  
    // if(username === ""){
    //     throw error        also check like this
    // }
    if (
      // [username, email, fullName, password].some(
      [username, fullName, email, password].some(
        (fields) => fields?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
  
    //--------Check if user already exists: username, email
    const adminExisted = await Admin.findOne({
      $or: [{ email }, 
        { username }
      ],
    });
  // console.log(userExisted)
    if (adminExisted) {
      throw new ApiError(
        409,
        "User with this email or username are already exist"
      );
    }

    const admin = await Admin.create({
      fullName,
      email,
      password,
      // avatar: avatar.url,
      // coverImage: coverImage?.url || "",
      username: username.toLowerCase(),
    });
    //-------Check for user creation
    const adminCreated = await Admin.findById(admin).select(
      "-password -refreshToken"
    );
    if (!adminCreated) {
      throw new ApiError(500, "Something went wrong while registering user");
    }
    return res
      .status(201)
      .json(new ApiResponse(200, adminCreated, "Registering User Successfully"));
  });

  const adminLogin = asyncHandlder(async (req, res) => {
    const { email, password } = req.body;
    // console.log(email);
  
    // if (!(username || email)) {
    if (!email) {
      throw new ApiError(400, "Email and username are required");
    }
    //-------Check User through Email or Username
    const admin = await Admin.findOne({
      $or: [{ email } ,
        // {username }
        ],
    });
  
    if (!admin) {
      throw new ApiError(404, "Admin does not exit");
    }
    //-------Check Password
    const isPasswordValid = await admin.isPasswordCorrect(password);
  
    if (!isPasswordValid) {
      throw new ApiError(404, "Invalid user credentials");
    }
    // console.log(admin);
    //-------Send Token through cookies
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      admin._id
    );
  
    const loggedIn = await Admin.findById(admin._id).select(
      //Remove password and refreshToken
      "-password -refreshToken"
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            admin: loggedIn,
            accessToken,
            refreshToken,
          },
          "admin Logged in successfully"
        )
      );
  });

  const adminLogout = asyncHandlder(async (req, res) => {

    const admin = Admin.findByIdAndUpdate(
      req.admin._id,
      {
        $set: {
          refreshToken: undefined,
        },
      },
      {
        new: true,
      },
      );
      // console.log(admin)
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(
          new ApiResponse(
          200,
          {},
          "Admin Logged Out successfully"
          )
      );
  });

  const adminPanel = asyncHandlder (async(req,res)=>{
    // console.log("Hello")
    const allUsers = await User.find().select(
      "-password -refreshToken"
    );
    // console.log(allUsers)
  
    if(allUsers === ""){
      throw new ApiError(500, "Error while fetching user")
    }
    res.json(allUsers)
  });

  const deleteUser = asyncHandlder(async (req,res)=>{

    const { userId } = req.params;

    // console.log(userId)

    const deletedUser = await User.findOneAndDelete(userId)

    if(!deleteUser){
      throw new ApiError(500, "Error while deleting users")
    }
    return res
      .status(201)
      .json(new ApiResponse(200, deletedUser, "User Delete Successfully"));
  });

  const getAdmin = asyncHandlder(async (req,res)=>{

    const admin = await Admin.findOne({ _id: req.admin._id });
      // console.log(admin)
      if(!admin){
        throw new ApiError(500, "Error while fetching admin")
      }
    
    return res
      .status(201)
      .json(new ApiResponse(200, admin, "Admin Get Successfully"));
  });




  export { adminRegister, adminLogin, adminPanel,  adminLogout, deleteUser, getAdmin};