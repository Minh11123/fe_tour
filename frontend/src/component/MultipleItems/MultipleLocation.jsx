import React from "react";
import LocationCard from "./LocationCard";
import styleSlick from "./multiple.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
const MultipleLocation = (props) => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const { listLocations } = props;
  const renderLocation = (listLocations) => {
    return listLocations.map((item, index) => {
      return (
        <div
          key={index}
          style={{ height: "300", width: "400" }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <LocationCard location={item} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderLocation(listLocations)}</Slider>
    </div>
  );
};

export default MultipleLocation;
