import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'Pass is req'],
    },
    refreshToken:{
        type:String,
    }
},{timestamps:true})

//userSchema.pre("save", ()=>{}) wrong way because we need refernce of the above in constructor .pre is a middleware used 
// as a check before the event is happening.
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();//check only when pass is modified else move forward

    this.password=bcrypt.hash(this.password,10); //hash pass
    next()
} )

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password); //compare the pass and hashed pass and return true or false
}
//access and refresh token

export const user = mongoose.model("user",userSchema);