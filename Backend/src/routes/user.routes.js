import { Router } from "express";
import {userRegister, userLogin, userLogout, refreshAccessToken, ownerId } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJwt} from "../middlewares/auth.middleware.js"

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    userRegister
    )
router.route("/login").post(userLogin)

//secure Routes
router.route("/logout").post(verifyJwt, userLogout)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/:ownerId").get(ownerId)


export default router;