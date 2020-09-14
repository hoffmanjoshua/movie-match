import React, { useEffect, useContext, useState } from "react";
import app from "../firebase.js";
import "./Dashboard.scss";
import Modal from "./Modal";
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
        <Modal show={modal} handleClose={hideModal}>
          <h2>Add a new film to your list.</h2>
          <div class="add-form-wrapper">
            <form>
              <label for="title">Film Title</label>
              <input type="text" name="title" required />
              <label for="relYear">Release Year</label>
              <input
                type="number"
                name="relYear"
                min="1900"
                max="2020"
                defaultValue="2020"
                required
                step="1"
              />
              <label for="haveWatched">Have you watched?</label>
              <input type="checkbox" name="haveWatched" />
              <button type="submit">Add Film</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
