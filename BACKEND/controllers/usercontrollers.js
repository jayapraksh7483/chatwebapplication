import User from "../models/usermodel.js";


export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInuserId = req.user._id; // Get the logged-in user's ID from the request
    const filteredUsers = await User.find({ _id: { $ne: loggedInuserId } }).select("-password") // Find all users except the logged-in user
 
    res.status(200).json(filteredUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}