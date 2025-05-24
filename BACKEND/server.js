import express from "express";
import dotenv from "dotenv";
 
 
import path from "path";
import connectToMongoDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import authroutes from "./routes/authroute.js";
import messageroutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userRoutes.js";
import { app, server } from "./socket/socket.js";
 

dotenv.config();
 
const PORT = process.env.PORT || 5000;

const __dirname =path.resolve()

 

app.use(express.json());
app.use(cookieParser());
 
// example static folder setup if needed
 
// app.get("/", (req, res) => {
//   res.send("Server running");
// });

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
