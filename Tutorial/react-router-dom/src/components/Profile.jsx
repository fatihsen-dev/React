import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { setUser, user } = useAuth();

  const logoutHandle = () => {
    setUser(false);
  };
  return (
    <>
      <h3>Profile page</h3>
      {!user && <Link to='/auth/login'>Giriş yap</Link>}
      {user && <button onClick={logoutHandle}>Çıkış yap</button>}
    </>
  );
}

export default Profile;
