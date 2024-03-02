import { Router } from "express";
import { listingSpace, allSpaces } from "../controllers/spaces.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJwt} from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/listingSpace").post(verifyJwt,
    upload.fields([
        {
            name: "interiorImages",
            maxCount: 10
        },
        {
            name: "exteriorImages",
            maxCount: 10
        }
    ]),
    listingSpace)

router.route("/allSpaces").get(allSpaces)



export default router;