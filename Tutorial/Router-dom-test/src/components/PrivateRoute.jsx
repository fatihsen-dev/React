import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  // Kullanıcı oturum açtımı ?
  if (!user) {
    console.log("Kullanıcı giriş yapmalı");
    return <Navigate to='/auth/login' />;
  }

  // Eğer oturum açmamışsa, yönlendirme işlemi yap!
  // eğer oturum amışsa children'i return et

  return children;
}
