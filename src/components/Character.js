import React from "react";
import "./Character.scss";

const Character = ({ name, gender, photoUrl, email }) => (
  <div className="row character">
    <div className="image">
      <img src={photoUrl} alt="character's photo" />
    </div>
    <div className="column character-info">
      <span className="name">{name}</span>
      <span className="text">{gender}</span>
      <span className="text">{email}</span>
    </div>
  </div>
);

export default Character;
