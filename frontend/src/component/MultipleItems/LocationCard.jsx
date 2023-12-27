import React from "react";
import { NavLink } from "react-router-dom";
import { FolderOpenOutlined } from "@ant-design/icons";
import "./location.css";
const LocationCard = (props) => {
  const { location } = props;
  const renderOverView = location.information
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
      <NavLink to={`/locations/${location.id}`} className="card">
        <div className=" bg-white rounded-lg border-8  border-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="banned-img rounded-t-lg"
            src={props.location.image}
            alt={location.name}
          />
          <div className="p-3">
            <h6 className="mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-white truncate">
              <span title={location.locationName}>{location.locationName}</span>
            </h6>
            <ul className=" mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-white">
              {renderOverView}
            </ul>

            <hr className="mb-4 mt-2 line" />
            {/* <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={location.avatar}
                  alt={location.name}
                />
                <div className="text-sm">
                  <span className="text-gray-800 font-bold leading-none flex items-center">
                    {location.teacher_name}
                  </span>
                </div>
              </div>
              <div className="text-lg flex item-center">
                <span className="text-pink-500 font-bold leading-none flex items-center">
                  {location.price}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default LocationCard;
