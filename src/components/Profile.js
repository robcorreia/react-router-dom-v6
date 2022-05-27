import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      Wellcome {user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

