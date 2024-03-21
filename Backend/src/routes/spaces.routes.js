import { Router } from "express";
import { listingSpace, allSpaces, mySpace, mySpaceEdit, updateSpace,deleteSpace } from "../controllers/spaces.controllers.js"
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

router.route("/mySpace").get(verifyJwt, mySpace);

router.route("/mySpace/:spaceId").get(verifyJwt, mySpaceEdit);

router.route("/mySpace/:spaceId").put(verifyJwt,
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
    updateSpace);
    
    router.route("/mySpace/:spacId").delete(verifyJwt, deleteSpace);


export default router;