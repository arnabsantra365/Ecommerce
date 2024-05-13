import {asynchandler} from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { user } from "../models/users.models.js";
const regUser = asynchandler(async (req,res)=>{
    res.status(200).json({ //to register the user
        message:"ok",
    })


const {fullname,email,username,password} =req.body
console.log("email:-",email);
console.log("fullname:-",fullname);

if(fullname==="" || email==="" || username==="" || password===""){ //validation
    throw new ApiError(400,"field required")
}

const existedUser=user.findOne({
    $or:[{username},{email}]
})

if(existedUser){
    throw new ApiError(409,"user already exist")
}

const User= await user.create({ //creating a new user in database
    fullname,
    email,
    password,
    username: username.toLowerCase(),
})

const createdUser = await User.findById(user._id).select( 
    // used to not send the password and refreshtoken as response
    "-password -refreshToken" 
)
if(!createdUser)
    {
        throw new ApiError(500,"Something wrong") //checking is user created or not
    }

return res.status(201).json(
    new ApiResponse(200, createdUser,"User registered") //sending the response of user created
)

})

export{regUser};