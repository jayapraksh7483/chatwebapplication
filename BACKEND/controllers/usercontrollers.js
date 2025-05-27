import User from "../models/usermodel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    console.log("User from request:", req.user);
    const loggedInuserId = req.user?._id;

    if (!loggedInuserId) {
      return res.status(400).json({ message: "User ID not found in request" });
    }

    const filteredUsers = await User.find({ _id: { $ne: loggedInuserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (err) {
    console.error("Error in getUsersForSidebar:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
