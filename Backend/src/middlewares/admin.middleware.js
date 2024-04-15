import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandlder } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJwt = asyncHandlder(async (req, res, next) => {
  try {
    //req.cookies all user tokens in it
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
        throw new ApiError(401, "Unauthorized Request");
    }
    //--------Verify Token
    const decodedToken = jwt.verify(token, process.env.ADMIN_ACCESS_TOKEN_SECRET)

    const admin = await Admin.findById(decodedToken?._id).select(
            "-password -refreshToken"
        )
        if(!admin){
            throw new ApiError(401, "Invalid Access Token");
        }

        req.admin = admin;
        next();

  } catch (error) {
    throw new ApiError(400, error?.message || "Invalid cccess token")
  }
});
