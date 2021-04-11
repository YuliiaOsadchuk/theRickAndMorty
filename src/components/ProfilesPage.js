import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import Profile from "./Profile";
import "./ProfilesPage.scss";
import "./Profile.scss";

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterGender, setGenderStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const fetchProfiles = async () => {
    const filterParams = {
      status: filterStatus !== "All" ? filterStatus : "",
      gender: filterGender !== "All" ? filterGender : "",
    };
    const params = new URLSearchParams(filterParams);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}&${params.toString()}`
    );
    const { info, results } = await response.json();
    setProfiles(results);
    setPageInfo(info);
  };

  useEffect(() => {
    fetchProfiles();
  }, [currentPage, filterStatus, filterGender]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProfileClick = (profileId) => {
    history.push(`${profileId}/profileDetails`);
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleGenderChange = (e) => {
    setGenderStatus(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <FilterPanel
        onStatusChange={handleStatusChange}
        onGenderChange={handleGenderChange}
      />
      <div className="add-btn-container">
        <button
          className="add-btn"
          onClick={() => history.push("/newProfilePage")}
        >
          Add Character
        </button>
      </div>
      <div className="page" style={{ backgroundColor: theme.background }}>
        <div className="row characters">
          {profiles?.map((profile) => (
            <Profile {...profile} onProfileClick={handleProfileClick} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageInfo?.pages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ProfilesPage;
