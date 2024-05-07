import {asynchandler} from "../utils/asynchandler.js";

const regUser = asynchandler(async (req,res)=>{
    res.status(200).json({ //to register the user
        message:"ok",
    })
})

export{regUser};