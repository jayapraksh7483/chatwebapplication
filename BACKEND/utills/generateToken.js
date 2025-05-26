import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId,res)=>{
   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
  expiresIn: "15d",
});
res.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV !== "development", // ✅ use true in deployed site
  sameSite: "None", // ✅ for cross-site cookies (e.g., Netlify + Render)
  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
});

};


export default generateTokenandSetCookie;