import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const travelData = [
    {
      id: 1,
      title: "COX'S BAZAR",
      // image: image1,
      Description:
        "Cox's Bazar is a city, fishing port, tourism center and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it..",
    },
    {
      id: 2,
      title: "SREEMONGOL",
      // image: image2,
      Description:
        "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912.",
    },
    {
      id: 3,
      title: "SUNDORBANS",
      // image: image3,
      Description:
        "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh",
    },
  ];
  const { destId } = useParams();

  const data = travelData.find((td) => td.id === parseInt(destId));
  const titleInLowerCase = data.title.toLowerCase();
  console.log(data);

  return (
    <div className="booking">
      <div className="booking__left">
        <h1>{data.title}</h1>
        <p>{data.Description}</p>
      </div>
      <div className="booking__right">
        <div className="booking__form">
          <form className="main__form">
            <input type="text" placeholder="Origin" required />
            <br />

            <input type="text" placeholder={data.title} required />
            <br />
            <label style={{ color: "black" }} htmlFor="date1">
              From
            </label>
            <br />
            <input type="date" name="date1" required />
            <br />
            <label style={{ color: "black" }} htmlFor="date2">
              To
            </label>
            <br />
            <input type="date" name="date2" required />
            <br />
            <Link to={`/booking-details/${titleInLowerCase}`}>
              <input
                className="submit__button"
                type="submit"
                value="Proceed Booking"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
