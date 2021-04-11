import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import "./ProfileDetailsPage.scss";

const ProfileDetailsPage = () => {
  const [profile, setProfile] = useState({
    image: "",
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    episode: [],
  });

  const [episodes, setEpisodes] = useState([]);
  const { profileId } = useParams();

  const fetchProfile = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${profileId}`
    );
    const character = await response.json();
    setProfile(character);
    const episodeIds = character.episode.map((epUrl) => {
      const index = epUrl.lastIndexOf("/");
      return epUrl.substring(index + 1);
    });
    fetchEpisodeNames(episodeIds);
  };

  const fetchEpisodeNames = async (episodeIds) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodeIds}`
    );
    const results = await response.json();
    setEpisodes(Array.isArray(results) ? results : [results]);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile-details-page">
      <div className="profile-details">
        <div className="character-info">
          <div className="image">
            <img src={profile.image} alt="character's photo" />
          </div>
          <p className="name">{profile.name}</p>
          <p className="status">{profile.status}</p>
        </div>
        <div className="episodes">
          <ul className="episodes-list">
            {episodes?.map(({ name }) => {
              return <li>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
