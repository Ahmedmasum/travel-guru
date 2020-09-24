import React, { useState } from "react";
import TravelLocationCard from "../TravelLocationCard/TravelLocationCard";
import TravelLocationInfo from "../TravelLocationInfo/TravelLocationInfo";
import image1 from "../../Resource/travel-guru-master/Image/Rectangle1.png";
import image2 from "../../Resource/travel-guru-master/Image/Sreemongol.png";
import image3 from "../../Resource/travel-guru-master/Image/sundorbon.png";

import "./Home.css";
const Home = () => {
  const [locationInfo, setLocationInfo] = useState({
    id: 1,
    title: "COX'S BAZAR",
    description:
      "Cox's Bazar is a city, fishing port, tourism center and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it..",
  });
  const handleCardClick = (title, description, id) => {
    setLocationInfo({ title, description, id });
    console.log(locationInfo);
  };

  const travelData = [
    {
      id: 1,
      title: "COX'S BAZAR",
      image: image1,
      Description:
        "Cox's Bazar is a city, fishing port, tourism center and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it..",
    },
    {
      id: 2,
      title: "SREEMONGOL",
      image: image2,
      Description:
        "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912.",
    },
    {
      id: 3,
      title: "SUNDORBANS",
      image: image3,
      Description:
        "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh",
    },
  ];

  return (
    <div className="home">
      <div className="location__info">
        <TravelLocationInfo
          title={locationInfo.title}
          description={locationInfo.description}
          id={locationInfo.id}
        ></TravelLocationInfo>
      </div>
      <div className="location__cards">
        {travelData.map((data) => {
          return (
            <div className="location__card">
              <TravelLocationCard
                key={data.id}
                data={data}
                handleCardClick={handleCardClick}
              ></TravelLocationCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
