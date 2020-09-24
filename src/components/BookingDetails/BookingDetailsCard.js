import React from "react";
import "./BookingDetailsCard.css";
import StarIcon from "@material-ui/icons/Star";

const BookingDetailsCard = (props) => {
  console.log(props);
  return (
    <div className="bookingDetailsCard">
      <div className="card__image">
        <img src={props.image} alt="" />
      </div>

      <div className="card__details">
        <p>This room is most beautiful</p>

        <small>4-Guest 2-Bedroom 2-Beds 2-Baths</small>

        <small>Wi-fi Air-Conditioning Kitchen</small>

        <small>Cancellation FlexibLe </small>
        <br />
        <small>
          <StarIcon style={{ fontSize: "13px", color: "orange" }} /> 4.9(20)
          $400/Night
        </small>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
