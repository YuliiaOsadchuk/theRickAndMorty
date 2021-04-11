import React, { useState } from "react";
import NewProfile from "./NewProfile";
import "./NewProfilePage.scss";

const NewProfilePage = () => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    gender: "",
    photoUrl: "",
  });

  const handleSave = (formData) => {
    console.log(formData);
  };

  return (
    <div className="new-profile-page">
      <NewProfile onSave={handleSave} />
    </div>
  );
};

export default NewProfilePage;
