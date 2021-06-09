import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = () => {
  return (
    <div className="row home-page">
      <Header />
      <div className="col-md-2 col-sm-12 m-0 p-0">
        <SideBar />
      </div>
      <div className="col-md-10 col-sm-12 m-0 p-0"></div>
    </div>
  );
};

export default HomePage;
