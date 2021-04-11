import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./NewProfile.scss";

const GENDER_OPTIONS = ["Male", "Female", "Genderless", "Unknown"];

const NewProfile = ({ onSave }) => {
  const renderGenderOptions = () =>
    GENDER_OPTIONS.map((gender) => (
      <label>
        <Field type="radio" name="gender" value={gender} />
        {gender}
      </label>
    ));

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: "Unknown",
        photoUrl:
          "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
      }}
      onSubmit={onSave}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("This field is Required"),
        email: Yup.string().email().required("This field is Required"),
        photoUrl: Yup.string().required("This field is Required"),
      })}
    >
      {({ touched, errors }) => {
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
                    ? "input-field error"
                    : "input-field mb"
                }
              />
              {errors.name && touched.name && (
                <div className="input-error-label">{errors.name}</div>
              )}
              <Field
                className={
                  errors.email && touched.email
                    ? "input-field error"
                    : "input-field mb"
                }
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              {errors.email && touched.email && (
                <div className="input-error-label">{errors.email}</div>
              )}
              <Field
                name="photoUrl"
                type="text"
                placeholder="Enter photoUrl"
                className={
                  errors.photoUrl && touched.photoUrl
                    ? "input-field error"
                    : "input-field mb"
                }
              />
              {errors.photoUrl && touched.photoUrl && (
                <div className="input-error-label">{errors.photoUrl}</div>
              )}
              <div className="gender-selector">{renderGenderOptions()}</div>
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
