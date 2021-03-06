import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Character from "./Character";
import NewProfile from "./NewProfile";
import { addProfile } from "../actions";

const NewProfilePage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles);

  const handleSave = (formData, { resetForm }) => {
    dispatch(addProfile(formData));
    resetForm();
  };

  return (
    <div className="new-profile-page">
      <NewProfile onSave={handleSave} />
      {profiles.map((profile) => (
        <Character {...profile} />
      ))}
    </div>
  );
};

export default NewProfilePage;
