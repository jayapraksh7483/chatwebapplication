import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authroute.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectToMongoDB from "./db/connectdb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
 
 
 
 
 

const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
const allowedOrigins = [
  'https://chatwebapplication-6.onrender.com',
  'https://chatwebapplication-7.onrender.com',
];

app.use(cors({
  origin: function(origin, callback){
    if (!origin) return callback(null, true); // allow requests like Postman or server-to-server without origin
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});