import React from "react";
import styleSlick from "./multiple.css";
import TourCard from "./TourCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const MultipleTour = (props) => {
  var settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const { listTours } = props;
  const renderTours = (listTours) => {
    return listTours.map((item, index) => {
      return (
        <div
          key={index}
          style={{ height: 300, width: 400 }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <TourCard tour={item} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderTours(listTours)}</Slider>
    </div>
  );
};

export default MultipleTour;
