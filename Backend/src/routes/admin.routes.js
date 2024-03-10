import { Router } from "express";
import { adminRegister, adminLogin, adminPanel, adminLogout, deleteUser, getAdmin } from "../controllers/admin.controllers.js";
import {verifyJwt} from "../middlewares/admin.middleware.js"

const router = Router()


//Admin Routes
router.route("/register").post(adminRegister)
router.route("/login").post(adminLogin)

router.route("/logout").post(verifyJwt, adminLogout)
router.route("/getadmin").get(verifyJwt, getAdmin)

router.route("/AdminUsers").get(verifyJwt, adminPanel)
router.route("/deleteUser/:userId").post(verifyJwt, deleteUser)



export default router;