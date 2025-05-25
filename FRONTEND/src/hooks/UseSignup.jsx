import { useState } from "react";
import { toast } from "react-hot-toast";
 import { useAuthContext } from "../context/AuthContext.jsx";
  
const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
 
 

  const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);

    try {
         console.log('API URL:', import.meta.env.VITE_API_URL);

      const API_BASE_URL = import.meta.env.VITE_API_URL;
      
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, username, password, confirmpassword:confirmPassword, gender }),
        credentials: 'include', 
      }); 

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

          

      
   
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
 
  return { signup, loading };
};

export default UseSignup;



  function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || gender === "") {
      toast.error("Please fill all the fields");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    return true;
  }

