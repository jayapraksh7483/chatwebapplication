import mongoose from "mongoose";
const  connectToMongoDB =async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect to mongodb")
    } catch(error){
       console.log("error connecting to mongdb", error.message)
    }
}

export default connectToMongoDB;