import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/fakeAuthContext";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [navigate, isAuthenticated]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoutes;
