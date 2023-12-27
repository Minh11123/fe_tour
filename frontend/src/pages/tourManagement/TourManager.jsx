import React, { useState } from "react";
import HomePage from "../../Home/HomePage/HomePage";
import Footer from "../../Home/Layout/Footer/Footer";
import TopNav from "../../Home/Layout/TopNav/TopNav";
import Tour from "../../Home/Tour/Tour";
import axios from "axios";
import { useEffect } from "react";
import TourService from "../../service/TourService";
import { Button, Pagination, Space, Table, Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";
const TourManager = () => {
  const [tab, setTab] = useState("home");
  const [tours, setTours] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const getAll = async () => {
    TourService.getAllTour()
      .then((response) => {
        setTours(response.data.content);
        setTotalPages(response.data.totalElements);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAll();
  }, []);

  const deleteTour = (tourId) => {
    TourService.deleteTour(tourId.key)
      .then((response) => {
        getAll();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Tour Name",
      key: "action",
      render: (tour) => (
        <Link to={`/tours/${tour.key}`} target="_blank" className="text-blue-400">
          {tour.tourname}
        </Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={text}
          alt="Avatar"
          style={{ width: "200px", height: "100px",borderRadius:"5px" }}
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date Tour",
      dataIndex: "dateTour",
      key: "dateTour",
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },

    {
      title: "Action",
      key: "action",
      render: (tour) => (
        <>
          <Button
            type="primary"
            ghost
            style={{ marginRight: "10px" }}
            onClick={() => navigate(`/editTour/${tour.key}`, console.log(tour))}
          >
            Update
          </Button>
          <Button type="primary" danger ghost onClick={() => deleteTour(tour)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const data = tours.map((item) => ({
    key: item.id,
    tourname: item.tourName,
    dateTour: item.dateTour,
    rate: item.rate,
    price: item.price,
    image: item.image
  }));
  return (
    <>
      {/* <TopNav /> */}
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <div
          style={{
            marginTop: "100px",
            border: "1px solid gray",
            borderRadius: "15px",
            padding: "20px",
            height: "auto",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Button type="primary" style={{backgroundColor:"#1677FF"}} onClick={() => navigate("/addTour")}>
            Create tour
          </Button>
          <Table
            columns={columns}
            dataSource={data}
            style={{ marginTop: "20px", gap: "20px", height: "auto" }}
            pagination={{
              pageSize: 5,
              total: totalPages,
              onChange: (page) => {},
            }}
            loading={false}
          />
          {/* <Pagination
          pageSize={5}
          total={totalPages}
          onChange={(page) => {}}
          style={{ height: '50px' }} // Set the desired height here
        /> */}
        </div>
      </div>
      {/* <Footer style={{ position: "relative " }} /> */}
    </>
  );
};

export default TourManager;
