import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();

  const userHandle = () => {
    setUser({
      id: 1,
      userName: "Fatih Şen",
    });
    navigate(location?.state?.return_url || "/", { replace: true });
  };
  return (
    <>
      <div>Login</div>
      <button onClick={userHandle}>Giriş yap</button>
    </>
  );
}

export default Login;
