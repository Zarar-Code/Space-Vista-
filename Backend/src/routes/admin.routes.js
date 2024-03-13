import { Router } from "express";
import { adminRegister, 
    adminLogin, 
    adminPanel, 
    adminLogout, 
    deleteUser, 
    getAdmin, 
    adminSpaces,
    updateSpace,
    viewAdminSpaces
} from "../controllers/admin.controllers.js";
import {verifyJwt} from "../middlewares/admin.middleware.js"

const router = Router()


//Admin Routes
router.route("/register").post(adminRegister)
router.route("/login").post(adminLogin)

router.route("/logout").post(verifyJwt, adminLogout)
router.route("/getadmin").get(verifyJwt, getAdmin)

router.route("/AdminUsers").get(verifyJwt, adminPanel)
router.route("/deleteUser/:userId").post(verifyJwt, deleteUser)

router.route("/adminSpaces").get(verifyJwt, adminSpaces)
router.route("/updateSpace/:spaceId").put(verifyJwt, updateSpace)

router.route("/adminSpace/:spaceId").get(verifyJwt, viewAdminSpaces)


export default router;