import { Router } from "express";
import { adminRegister, adminLogin } from "../controllers/admin.controllers.js";

const router = Router()


//Admin Routes
router.route("/register").post(adminRegister)
router.route("/login").post(adminLogin)


export default router;