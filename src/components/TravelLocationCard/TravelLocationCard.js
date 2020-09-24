import React from "react";
import "./TravelLocationCard.css";

const TravelLocationCard = (props) => {
  console.log(props);
  return (
    <>
      <div
        onClick={() =>
          props.handleCardClick(
            props.data.title,
            props.data.Description,
            props.data.id
          )
        }
        className="card"
      >
        <img src={props.data.image} alt="" />
        <div className="center"> {props.data.title}</div>
      </div>
    </>
  );
};

export default TravelLocationCard;
