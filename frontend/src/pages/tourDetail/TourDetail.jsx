import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../../Home/Layout/TopNav/TopNav";
import Footer from "../../Home/Layout/Footer/Footer";
import TourService from "../../service/TourService";
import "./tourDetail.scss";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
const TourDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TourService.getTourById(id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <TopNav />
      {data && (
        <div className="tourDetail-body">
          <div className="infor">
            <div className="title">
              <div style={{ marginLeft: "20px" }}>
                <h2>{data.tourName}</h2>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    
                  }}
                >
                  <div
                    style={{
                      color: "yellow",
                      fontSize: "22px",
                      marginRight: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StarFilled style={{ marginLeft: "5px" }} />
                    <StarFilled style={{ marginLeft: "5px" }} />
                    <StarFilled style={{ marginLeft: "5px" }} />
                    <StarFilled style={{ marginLeft: "5px" }} />
                    <StarFilled style={{ marginLeft: "5px" }} />
                  </div>
                  <div
                    style={{
                      border: "1px solid red",
                      padding: "1px 10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color:"red"
                    }}
                  >
                    <HeartOutlined/> 999
                  </div>
                </div>
              </div>
              <p style={{ textDecoration: "underline" }}>{data.price}đ/khách</p>
              <div style={{ marginRight: "20px" }}>
                <p
                  style={{
                    border: "1px solid",
                    padding: "3px",
                    textAlign: "center",
                    marginBottom: "15px",
                    borderRadius: "5px",
                  }}
                >
                  {data.dateTour}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "22px",
                    border: "1px solid",
                    padding: "5px",
                    cursor: "pointer",
                    color: "red",
                    borderRadius: "5px",
                  }}
                >
                  <ShoppingCartOutlined style={{}} />
                  <p style={{ margin: "0", paddingLeft: "5px" }}>Đặt ngay</p>
                </div>
              </div>
            </div>
            <div className="imageDes">
              <img src={data.image} alt="" className="img" />
              <p style={{ marginRight: "20px" }}>{data.information}</p>
            </div>
          </div>
          <div></div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default TourDetail;
