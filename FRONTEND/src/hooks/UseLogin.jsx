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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // important if using cookies for auth
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Save user to localStorage and context
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful");

      return true;
    } catch (error) {
      toast.error(error.message || "Login failed");
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
