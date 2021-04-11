import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "./NewProfile.scss";

const GENDER_OPTIONS = ["Male", "Female", "Genderless", "Unknown"];

const NewProfile = ({ onSave }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    gender: "",
    photoUrl: "",
  });

  const renderGenderOptions = (gender) => (
    <label>
      <Field type="radio" name="gender-choice" value={gender} checked />
      {gender}
    </label>
  );

  return (
    <Formik
      initialValues={{ name: "", email: "", gender: "male", photoUrl: "" }}
      onSubmit={onSave}
    >
      <Form>
        <div className="new-profile column">
          <h3>Add new character</h3>
          <Field
            className="input-field mb"
            name="name"
            type="text"
            placeholder="Enter name"
          />
          <Field
            className="input-field mb"
            name="email"
            type="email"
            placeholder="Enter email address"
          />
          <Field
            className="input-field mb"
            name="photoUrl"
            type="text"
            placeholder="Enter photoUrl"
          />
          {GENDER_OPTIONS.map((gender) => renderGenderOptions(gender))}
          <div className="mb" />
          <button className="add-btn" type="submit">
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default NewProfile;
