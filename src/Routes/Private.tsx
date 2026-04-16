import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Services/ConnectionFirebase";
import { onAuthStateChanged } from "firebase/auth";
interface PrivateProps {
  children: React.ReactNode;
}
export function Private({ children }: PrivateProps) {
  const [user_login, setUser_login] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verification = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser_login(true);
        setLoading(false);
      } else {
        setUser_login(false);
        setLoading(false);
      }
    });
    return () => {
      verification();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user_login) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
