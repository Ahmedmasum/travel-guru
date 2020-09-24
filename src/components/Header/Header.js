import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../Resource/travel-guru-master/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="header-logo" />
      </div>
      <div className="header__input">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          placeholder="Search Your Destination"
          className="no__outline"
        />
      </div>
      <ul>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <li>Destination</li>
        <li>Blog</li>
        <li>Contact</li>
        {loggedInUser.email ? (
          <button onClick={() => setLoggedInUser({})}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Logout
            </Link>
          </button>
        ) : (
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
