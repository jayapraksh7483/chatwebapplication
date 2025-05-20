import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';
 const protectRoute = async (req, res, next) => {
    try {
          const token = req.cookies.jwt;
           
            if (!token) {
        return res.status(401).json({ message: "Unauthorized - no token" });
     }

     const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - token invalid" });
        }

      const user = await User.findById(decoded.userId).select("-password");

 
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - user not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
export default protectRoute;