import {
  FolderOpenOutlined,
  HeartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./tourCard.css";
const TourCard = (props) => {
  const { tour } = props;
  const renderOverView = tour.tourName
    ?.split(";")
    .slice(0, 1)
    .map((item, index) => {
      return (
        <li
          className="my-1 truncate"
          style={{ maxInlineSize: "none" }}
          key={index}
        >
          <div className="flex align-center relative">
            <span className="dot absolute"></span>
            <span
              className="pl-8 text-medium font-medium tracking-tight truncate"
              title={item}
            >
              {item}
            </span>
          </div>
        </li>
      );
    });
  return (
    <>
      <NavLink
        to={`/tours/${tour.id}`}
        className="cursor-pointer card "
        target="_blank"
      >
        <div className="flex flex-col bg-white items-center rounded-lg  ">
          <img
            className="avatar-img object-cover rounded-lg "
            src={tour.image}
            alt={tour.image}
          />
          <div className="flex w-full flex-col p-4 leading-normal">
            <ul className="mb-2  font-semibold tracking-tight text-gray-900 ">
              {renderOverView}
            </ul>
            <div className="flex w-full justify-between">
              <div className="flex items-center">
                <StarFilled className="folder-icon" />
                <span className="ml-2 text-gray-800 font-medium text-xs leading-none flex items-center">
                  {tour.rate}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-800 font-medium  leading-none flex items-center align-middle ">
                  {tour.dateTour}
                </span>
              </div>
            </div>
            <div className="flex">
              <p className="font-bold text-xl"> {tour.price}đ</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default TourCard;
