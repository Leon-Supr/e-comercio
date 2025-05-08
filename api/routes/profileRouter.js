import { Router } from "express";

import {
    getProfile,
    updateProfile,
    profileProducts
} from "../controllers/profileController.js"

const profileRouter = Router();

profileRouter.get('/', isAuthenticated, getProfile);
profileRouter.put('/', updateProfile);
profileRouter.get('/userid', profileProducts);

export default profileRouter;