import { asyncHandlder } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Space } from '../models/spaces.models.js'

import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloundinary.js";


const listingSpace = asyncHandlder(async(req, res) =>{

    const { firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, customizedPlace, googleMapsLocation, useAbleArea, description, residentialArea } = req.body;
  console.log( firstName, email, lastName)

  if (
    [firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //--------Check if sPACE already exist
  const placeExisted = await Space.findOne({
    $or: [{ email }
    ],
  });
  if (placeExisted) {
    throw new ApiError(
      409,
      "Place with this email are already exist"
    );
  }
  
//  --------Check for images, check for avatar

  const interiorLocalPath = req.files?.interiorImages[0]?.path;
  const exteriorLocalPath = req.files?.exteriorImages[0]?.path;
  // console.log(req.files)


  if (!interiorLocalPath) {
    throw new ApiError(400, "Interior Image is required");
  }
  if (!exteriorLocalPath) {
    throw new ApiError(400, "Exterior Image is required");
  }

  // ---------Upload them to cloudinary, avatar

  const interiorImages = await uploadOnCloudinary(interiorLocalPath);
  // console.log(Interior)
  const exteriorImages = await uploadOnCloudinary(exteriorLocalPath);
  if (!interiorImages) {
    throw new ApiError(400, "Interior is required");
  }
  if (!exteriorImages) {
    throw new ApiError(400, "Exterior is required");
  }

  //--------Create user object create entry in db

  const landlord = await Space.create({
    firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, customizedPlace, googleMapsLocation, useAbleArea, description, residentialArea,
    interiorImages: interiorImages.url,
    exteriorImages: exteriorImages.url,
  });
  //-------Check for user creation
  // console.log(landlord)
  
  if (!landlord) {
    throw new ApiError(500, "Something went wrong while registering place");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, landlord, "Registering Place Successfully"));
});

const allSpaces = asyncHandlder(async(req,res)=>{

    const AllSpaces = await Space.find()
    // console.log(AllSpaces)
  
    if(AllSpaces === ""){
      throw new ApiError(500, "Error while fetching user")
    }
    res.json(AllSpaces)
});

export {listingSpace, allSpaces}