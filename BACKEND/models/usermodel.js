import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    profilePic: {
        type: String, // usually stores image URL or filename
        default: ""   // you can set a default image path if needed
    },
},

      {timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
