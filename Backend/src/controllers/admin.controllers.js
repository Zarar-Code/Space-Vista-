import { asyncHandlder } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from '../models/admin.models.js'

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
    console.log(admin);
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
          "User Logged in successfully"
        )
      );
  });

  export { adminRegister, adminLogin };