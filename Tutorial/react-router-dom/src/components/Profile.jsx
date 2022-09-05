import React from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { setUser } = useAuth();

  const logoutHandle = () => {
    setUser(false);
  };
  return (
    <>
      <h3>Profile page</h3>
      <button onClick={logoutHandle}>Çıkış yap</button>
    </>
  );
}

export default Profile;
