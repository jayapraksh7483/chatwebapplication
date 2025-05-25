import React ,{useState}from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const UseLogout = () => {

    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const API_BASE_URL = import.meta.env.VITE_API_URL;
             const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
                method: "POST",
 
                headers: {
                    "Content-Type": "application/json",
                }  })
                
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                localStorage.removeItem("chat-user");
                setAuthUser(null);
        } catch (error) {
            toast.error("Logout failed", error);
        } finally {
            setLoading(false);
        }
    };
    return { loading, logout }
}

export default UseLogout