import React, { useState, useEffect } from "react";
import "./Profile.scss";

const Profile = ({
  id,
  image,
  name,
  status,
  species,
  gender,
  origin,
  episode,
  onProfileClick,
}) => {
  const [episodeName, setEpisodeName] = useState("");

  const fetchEpisodeName = async () => {
    const response = await fetch(episode[0]);
    const { name } = await response.json();
    setEpisodeName(name);
  };

  useEffect(() => {
    fetchEpisodeName();
  }, []);

  return (
    <div className="row profile" onClick={() => onProfileClick(id)}>
      <div className="image">
        <img src={image} alt="character's photo" />
      </div>
      <div className="column character-info">
        <span className="name truncate" title={name}>
          {name}
        </span>
        <div className="row general-info">
          <span className="text">{status}</span>
          <span className="text">-</span>
          <span className="text truncate" title={species}>
            {species}
          </span>
        </div>
        <span className="text">{gender}</span>
        <div className="column">
          <span className="title">Last known location:</span>
          <span className="text truncate" title={origin.name}>
            {origin.name}
          </span>
        </div>
        <div className="column">
          <span className="title">First seen in:</span>
          <span className="text truncate" title={episodeName}>
            {episodeName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
