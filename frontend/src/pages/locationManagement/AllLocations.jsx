import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LocationCard from "../../component/MultipleItems/LocationCard";
import Footer from "../../Home/Layout/Footer/Footer";
import TopNav from "../../Home/Layout/TopNav/TopNav";
import LocationService from "../../service/LocationService";

const AllLocations = () => {
  const [locations, setLocations] = useState([]);

  const getAll = async () => {
    try {
      const response = await LocationService.getAllLocation();
      setLocations(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  console.log(locations);

  const listLocations = () => {
    return locations?.map((item, index) => {
      return (
        <Fragment key={item.id}>
            <LocationCard location={item} />
        </Fragment>
      );
    });
  };
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {},
  });
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <TopNav />
      <div
        className={
          "sidebar drop-shadow-lg rounded-r-2xl mt-20" +
          (showSideBar ? " open" : "")
        }
      >
        <button
          type="button"
          className=" sidebar-show-button absolute text-blue-700 border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 bg-white"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          {showSideBar ? (
            <svg
              className="w-5 h-4 mr-2"
              viewBox="0 0 10 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-4 mr-2"
              viewBox="0 0 10 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
        <ul className="nav-list">
          <li>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="searchTerm"
                onChange={formik.handleChange}
                placeholder="Search Course"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
            rounded leading-3 focus:outline-none focus:border-gray-500"
              />
            </form>
            <span className="tooltip">Search</span>
          </li>
          <div className="container-checkbox relative"></div>
        </ul>
      </div>
      <section className="home-section mt-20">
        <div className="cards">{listLocations()}</div>
      </section>
      <Footer />
    </div>
  );
};

export default AllLocations;
