import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./NewProfile.scss";

const GENDER_OPTIONS = ["Male", "Female", "Genderless", "Unknown"];

const NewProfile = ({ onSave }) => {
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
      validationSchema={Yup.object().shape({
        name: Yup.string().required("This field is Required"),
        email: Yup.string().email().required("This field is Required"),
        photoUrl: Yup.string().required("This field is Required"),
      })}
    >
      {(props) => {
        const { values, touched, errors } = props;

        return (
          <Form>
            <div className="new-profile column">
              <h3>Add new character</h3>
              <Field
                className="input-field mb"
                name="name"
                type="text"
                placeholder="Enter name"
                className={
                  errors.name && touched.name
                    ? "text-input error input-field mb"
                    : "text-input input-field mb"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <Field
                className={
                  errors.email && touched.email
                    ? "text-input error input-field mb"
                    : "text-input input-field mb"
                }
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <Field
                name="photoUrl"
                type="text"
                placeholder="Enter photoUrl"
                className={
                  errors.photoUrl && touched.photoUrl
                    ? "text-input error input-field mb"
                    : "text-input input-field mb"
                }
              />
              {errors.photoUrl && touched.photoUrl && (
                <div className="input-feedback">{errors.email}</div>
              )}
              {GENDER_OPTIONS.map((gender) => renderGenderOptions(gender))}
              <div className="mb" />
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewProfile;
