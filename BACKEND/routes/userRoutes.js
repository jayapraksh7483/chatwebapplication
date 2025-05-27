import express from "express";
 
import { getUsersForSidebar } from "../controllers/usercontrollers.js";


const router = express.Router();

router.get("/",getUsersForSidebar);

export default router;  
