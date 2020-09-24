import { Link } from "react-router-dom";
import React from "react";
import "./TravelLocationInfo.css";
const TravelLocationInfo = (props) => {
  return (
    <div className="location__info">
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <button>
        {" "}
        <Link
          to={`/booking/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Booking
        </Link>
      </button>
    </div>
  );
};

export default TravelLocationInfo;
