 import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    // ✅ Input validation
    if (!username || !password) {
      toast.error("Please fill all the fields");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    setLoading(true);

    try {
      const res = await fetch("https://chatwebapplication-7.onrender.com/api/auth/login", {
        method: "POST",
        credentials: "include", // important if using cookies for auth
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();console.log("JWT token from response:", data.token);


      if (!res.ok) {
        throw new Error(data.error || data.message || "Login failed");
      }

      // ✅ Ensure token exists
      if (!data.token) {
        throw new Error("No token received. Login failed.");
      }

      // ✅ Save user to localStorage and auth context
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful");

      return true;
    } catch (error) {
      toast.error(error.message || "Login failed");
      setAuthUser(null); // optional
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
