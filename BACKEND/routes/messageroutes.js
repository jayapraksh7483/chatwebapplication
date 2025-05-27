import express from "express";
import { sendmessage,getmessage } from "../controllers/messagecontrollers.js";
 import protectRoute from "../middleware/protectroute.js";

const router = express.Router();

router.get("/:id", protectRoute , getmessage);
router.post("/send/:id", protectRoute , sendmessage);
 

export default router;
