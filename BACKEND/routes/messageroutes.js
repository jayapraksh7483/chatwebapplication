import express from "express";
import { sendmessage,getmessage } from "../controllers/messagecontrollers.js";
 

const router = express.Router();

router.get("/:id",   getmessage);
router.post("/send/:id" , sendmessage);
 

export default router;
