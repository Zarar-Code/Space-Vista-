import { asyncHandlder } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Space } from '../models/spaces.models.js'

import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloundinary.js";


const listingSpace = asyncHandlder(async(req, res) =>{

    const { firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, googleMapsLocation, useAbleArea, description, residentialArea,selectedEventspaces,selectedPrivate, price,capacity,address,amenities } = req.body;
    const { user } = req;
  // console.log(firstName)

  if (
    [firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, price,capacity,address].some(
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
    return res.status(409).json({ message: "Place with this email are already exist" });
  }
  
//  --------Check for images, check for avatar

  // const interiorLocalPath = req.files?.interiorImages[0]?.path;
  // const exteriorLocalPath = req.files?.exteriorImages[0]?.path;
  // console.log(req.files)


  // if (!interiorLocalPath) {
  //   throw new ApiError(400, "Interior Image is required");
  // }
  // if (!exteriorLocalPath) {
  //   throw new ApiError(400, "Exterior Image is required");
  // }

  // // ---------Upload them to cloudinary, avatar

  // const interiorImages = await uploadOnCloudinary(interiorLocalPath);
  // // console.log(Interior)
  // const exteriorImages = await uploadOnCloudinary(exteriorLocalPath);
  // if (!interiorImages) {
  //   throw new ApiError(400, "Interior is required");
  // }
  // if (!exteriorImages) {
  //   throw new ApiError(400, "Exterior is required");
  // }

  const interiorLocalPaths = req.files['interiorImages'].map(file => file.path);
    const exteriorLocalPaths = req.files['exteriorImages'].map(file => file.path);

    // console.log(interiorLocalPaths)

    // Check if images are uploaded
    if (!interiorLocalPaths || interiorLocalPaths.length === 0) {
      throw new ApiError(400, "Interior Images are required");
    }
    if (!exteriorLocalPaths || exteriorLocalPaths.length === 0) {
      throw new ApiError(400, "Exterior Images are required");
    }

    // Upload interior and exterior images to cloudinary
    const interiorImages = await Promise.all(interiorLocalPaths.map(path => uploadOnCloudinary(path)));
    const exteriorImages = await Promise.all(exteriorLocalPaths.map(path => uploadOnCloudinary(path)));

    // Check if images are uploaded to cloudinary
    if (!interiorImages || interiorImages.length === 0) {
      throw new ApiError(400, "Failed to upload Interior Images");
    }
    if (!exteriorImages || exteriorImages.length === 0) {
      throw new ApiError(400, "Failed to upload Exterior Images");
    }


  //--------Create space object create entry in db

  const space = await Space.create({
    firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, googleMapsLocation, useAbleArea, description, residentialArea,selectedEventspaces,selectedPrivate,price,capacity,address,amenities,
    interiorImages: interiorImages.map(image => image.url),
      exteriorImages: exteriorImages.map(image => image.url),
    createdBy: user._id
  });
  //-------Check for user creation
  // console.log(space)
  
  if (!space) {
    throw new ApiError(500, "Something went wrong while registering place");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, space, "Registering Place Successfully"));
});

const allSpaces = asyncHandlder(async(req,res)=>{

    const AllSpaces = await Space.find()
    // console.log(AllSpaces)
  
    if(AllSpaces === ""){
      throw new ApiError(500, "Error while fetching user")
    }
    res.json(AllSpaces)
});

const mySpace = asyncHandlder(async(req,res)=>{

  const { user } = req;

  const userSpaces = await Space.find({ createdBy: user._id });

  if (userSpaces.length < 0) {
    return res
    .status(404)
    .json(new ApiResponse(200, {}, "No spaces found for this user."));
  }
  
  return res
    .status(201)
    .json(new ApiResponse(200, userSpaces, "Fetching Place Successfully"));

});


const mySpaceEdit = asyncHandlder(async(req,res)=>{

  const { spaceId } = req.params;
  // console.log(spaceId)

    const space = await Space.findById(spaceId); // Search for the space by its ID

    if (!space) {
      throw new ApiError(500, "Something went wrong while Edit place");
    }
    res.status(200).json({ space });
  
});

const updateSpace = asyncHandlder(async(req,res)=>{

  const { firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, googleMapsLocation, useAbleArea, description, residentialArea,selectedEventspaces,selectedPrivate, price,capacity,address,amenities } = req.body;
  // console.log(req.body)

  if (
    [firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, price,capacity,address].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  // console.log(req.files)
  const interiorLocalPaths = req.files['interiorImages'].map(file => file.path);
    const exteriorLocalPaths = req.files['exteriorImages'].map(file => file.path);

    // console.log(interiorLocalPaths)

    // Check if images are uploaded
    if (!interiorLocalPaths || interiorLocalPaths.length === 0) {
      throw new ApiError(400, "Interior Images are required");
    }
    if (!exteriorLocalPaths || exteriorLocalPaths.length === 0) {
      throw new ApiError(400, "Exterior Images are required");
    }

    // Upload interior and exterior images to cloudinary
    const interiorImages = await Promise.all(interiorLocalPaths.map(path => uploadOnCloudinary(path)));
    const exteriorImages = await Promise.all(exteriorLocalPaths.map(path => uploadOnCloudinary(path)));

    // Check if images are uploaded to cloudinary
    if (!interiorImages || interiorImages.length === 0) {
      throw new ApiError(400, "Failed to upload Interior Images");
    }
    if (!exteriorImages || exteriorImages.length === 0) {
      throw new ApiError(400, "Failed to upload Exterior Images");
    }

  //--------Create space object create entry in db

  const space = await Space.updateOne({
    firstName, lastName, email, contactNo, propertyType, city, selectedWorkspace, selectedCoworkingOption, googleMapsLocation, useAbleArea, description, residentialArea,selectedEventspaces,selectedPrivate,price,capacity,address,amenities,
    interiorImages: interiorImages.map(image => image.url),
      exteriorImages: exteriorImages.map(image => image.url),
    // createdBy: user._id
  });
  //-------Check for user creation
  // console.log(space)
  
  if (!space) {
    throw new ApiError(500, "Something went wrong while updating place");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, space, "Update Place Successfully"));
});

const deleteSpace = asyncHandlder(async(req,res)=>{

const {spacId} = req.params

const deleteMySpace = await Space.findByIdAndDelete(spacId)

if (!deleteMySpace) {
  throw new ApiError(500, "Error while deleting space");
}

return res
  .status(201)
  .json(new ApiResponse(200, deleteMySpace, "Space Delete Successfully"));
})


export {listingSpace, allSpaces, mySpace, mySpaceEdit, updateSpace, deleteSpace}