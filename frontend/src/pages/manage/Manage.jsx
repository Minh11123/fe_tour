import { Tabs } from "antd";
import React, { useState } from "react";
import Footer from "../../Home/Layout/Footer/Footer";
import TopNav from "../../Home/Layout/TopNav/TopNav";
import LocationManager from "../locationManagement/LocationManager";
import TourManager from "../tourManagement/TourManager";
import "./manage.scss";
const Manage = () => {
  const [tab, setTab] = useState("tour");
  const tabItems = [
    { label: "Tour", key: "tour" },
    { label: "Location", key: "location" },
  ];
  const handleOnChange = (value) => {
    setTab(value);
  };
  return (
    <div >
      <TopNav />
      <div className="manage-container">
        <div className="tab">
          <Tabs
            tabBarStyle={{ width: "180px", marginLeft: "30px" }}
            tabPosition="left"
            items={tabItems}
            onChange={handleOnChange}
          />
        </div>
        <div className="content">
          {tab === "tour" && <TourManager />}
          {tab === "location" && <LocationManager />}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Manage;
