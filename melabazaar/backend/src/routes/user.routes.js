import {Router} from "express";
import {loginUser, regUser} from "../controllers/user.controllers.js";
const router= Router()

router.route("/register").post(regUser) // this call goes to regUser of user controllerl
// router.route("/login").post(registerUser)
router.route("/login").post(loginUser);
export default router;