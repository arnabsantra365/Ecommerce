import {Router} from "express";
import {regUser} from "../controllers/user.controllers.js";
const router= Router()

router.route("/register").post(regUser) // this call goes to regUser of user controllerl
// router.route("/login").post(registerUser)

export default router;