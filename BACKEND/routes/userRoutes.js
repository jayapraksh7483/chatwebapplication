import express from "express";
import protectRoute from "../middleware/protectroute.js";
import { getUsersForSidebar } from "../controllers/usercontrollers.js";


const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);

export default router;  
