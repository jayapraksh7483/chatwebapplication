import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    // Validate input fields
    const isValid = validateLoginInputs({ username, password });
    if (!isValid) return false;

    setLoading(true);

    try {
      const res = await fetch("https://chatwebapplication-7.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // important if using cookies for auth
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await res.json();

      // Save user to localStorage and context
      localStorage.setItem("chat-user", JSON.stringify(data));
      localStorage.setItem("chat-token", data.token); 
      setAuthUser(data,token);
      toast.success("Login successful");

      return true;
    } catch (error) {
      toast.error(error.message || "Login failed");
      setAuthUser(null); // clear user on failure (optional)
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

// ✅ Input validation function
function validateLoginInputs({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
}
