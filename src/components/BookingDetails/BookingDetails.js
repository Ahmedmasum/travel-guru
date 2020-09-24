import React from "react";
import "./BookingDetails.css";

import BookingDetailsCard from "./BookingDetailsCard";
import image1 from "../../Resource/travel-guru-master/Image/Rectangle 26.png";
import image2 from "../../Resource/travel-guru-master/Image/Rectangle 27.png";
import image3 from "../../Resource/travel-guru-master/Image/Rectangle 28.png";
import { Map, GoogleApiWrapper } from "google-maps-react";
// import GoogleMap from "../GoogleMap/GoogleMap";

const BookingDetails = (props) => {
  return (
    <div className="bookingDetails">
      <div className="bookingDetails__left">
        <BookingDetailsCard image={image1}></BookingDetailsCard>
        <BookingDetailsCard image={image2}></BookingDetailsCard>
        <BookingDetailsCard image={image3}></BookingDetailsCard>
      </div>

      <div className="bookingDetails__right">
        <Map
          google={props.google}
          zoom={8}
          className="google__map"
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "API KEY HERE",
})(BookingDetails);
