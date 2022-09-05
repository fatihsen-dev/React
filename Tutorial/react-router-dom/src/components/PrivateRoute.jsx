import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to='/auth/login'
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }
  return children;
}
