import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authroute.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userRoutes.js";
import { fileURLToPath } from "url";
import connectToMongoDB from "./db/connectdb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
 

app.use(cors({
  origin: ['http://localhost:5173', 'https://chatwebapplication-5.onrender.com'],
  credentials: true,
}));
const __filename = fileURLToPath(import.meta.url);
 
const __dirname  = path.dirname(__filename);

// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// Build asset folder
const frontDistPath = path.join(__dirname, "FRONTEND", "dist");

// Serve React app static files
app.use(express.static(frontDistPath));

// On any other route, send the React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontDistPath, "index.html"));
});
server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});