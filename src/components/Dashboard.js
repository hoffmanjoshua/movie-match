import React, { useEffect, useContext, useState } from "react";
import app from "../firebase.js";
import "./Dashboard.scss";
import { AuthContext } from "../Auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  useEffect(() => {
    console.log(currentUser);
  });

  const { currentUser } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log(evt.target.searchBar.value);
    setSearchQuery(evt.target.searchBar.value);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="searchBar"
            class="search-bar"
            placeholder="Search by film title..."
          />
          <button type="submit" class="search-btn" value="">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <p>
          <span className="display-name">{currentUser.displayName}</span>
          <button onClick={() => app.auth().signOut()} className="signout-btn">
            Sign Out
          </button>
        </p>
      </div>
      <div className="dashboard-body">
        <p>{searchQuery}</p>
        <button onClick={showModal}>Add New Film</button>
      </div>
    </div>
  );
};

export default Dashboard;
