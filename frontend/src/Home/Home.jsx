import React, { useState } from "react";
import TopNav from "./Layout/TopNav/TopNav";
import Footer from "./Layout/Footer/Footer";
import Tour from "./Tour/Tour";
import HomePage from "./HomePage/HomePage";

const Home = () => {
  const [tab, setTab] = useState("home");
  return (
    <div>
      <TopNav setTab={setTab} tab={tab} />
      {tab === "home" && <HomePage setTab={setTab} tab={tab} />}
      {tab === "tour" && <Tour setTab={setTab} />}

      <Footer />
    </div>
  );
};

export default Home;
