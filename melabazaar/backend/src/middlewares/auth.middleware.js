import { asynchandler } from "../utils/asynchandler";
import { ApiError } from "../utils/ApiError";
import { user } from "../models/users.models";
import jwt from "jsonwebtoken";

export const verify =asynchandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if(!token){
            throw new ApiError(401,"Unauthorized access")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN)
    
        const User = await user.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!User){
            throw new ApiError(401,"Invalid access token")
    
        }
    
        req.User = User;
        next();
    } catch (error) {
        throw new ApiError(402, error?.message || "Invalid accesstoken")
    }
})