import React, { useState, useEffect } from "react";
import getTourList from "../../api/tourAPI";
import getLocationList from "../../api/locationAPI";
import { HomePageStyle, Image, Img } from "./index.style";
import ImageBackground from "../../img/background.png";
import { NavLink } from "react-router-dom";
import MultipleLocation from "../../component/MultipleItems/MultipleLocation";
import { eachDayOfInterval } from "date-fns";
import MultipleTour from "../../component/MultipleItems/MultipleTour";
import TourService from "../../service/TourService";
const HomePage = ({ setTab }) => {
  const [tours, setTours] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const fetchData = async () => {
    const dataTour = await getTourList();
    const dataLocation = await getLocationList();
    setTours(dataTour.data.content);
    setLocationList(dataLocation.data.content);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomePageStyle>
      <div>
        <Image src={ImageBackground} alt="/" st />
      </div>

      <div className="bg-xoan-cham bg-F9F6E8 py-5">
        <div className="flex items-center justify-center pt-10 mb-10">
          <span className="line-text text-4xl font-bold">
            Our lastest locations
          </span>
        </div>
        <MultipleLocation listLocations={locationList} />
        <div className="flex items-center w-full justify-center pt-12">
          <NavLink
            className="text-lg col-span-1 bg-orange-100 uppercase text-orange-500 font-semibold  py-2 px-8 border border-orange-300 hover:border-transparent rounded-sm duration-500 hover:bg-orange-300 hover:!text-white rounded-xl"
            to="/all-locations"
          >
            View All
          </NavLink>
        </div>
      </div>
      <div className="py-5 background-teacher">
        <div className="flex items-center justify-center pt-10 mb-10">
          <span className="line-text text-4xl font-bold">
            Tours
          </span>
        </div>
        <MultipleTour listTours={tours} />
        <div className="flex items-center w-full justify-center pt-12">
          <button
            className="text-lg col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-500 font-semibold hover:text-white py-2 px-8 border  border-orange-300 hover:border-transparent rounded-xl"
            onClick={() => {}}
          >
            View All
          </button>
        </div>
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
