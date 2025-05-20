import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes  from "./routes/authroute.js"
import messageroutes from './routes/messageroutes.js'
import userRoutes from './routes/userRoutes.js'


import connectToMongoDB from "./db/connectdb.js";

const app=express();
const PORT =process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

 


app.get("/",(req,res)=> {
    res.send("pora puva")
})

 app.use("/api/auth",authroutes)
 app.use("/api/messages",messageroutes)
 app.use("/api/users",userRoutes)

 
app.listen(PORT ,()=>{
    connectToMongoDB();
    console.log("server working");}
)