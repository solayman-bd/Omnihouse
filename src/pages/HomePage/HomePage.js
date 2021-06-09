import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import SearchResultContainer from "../../components/SearchResultContainer/SearchResultContainer";

const HomePage = () => {
  return (
    <div className="row home-page min-vh-100">
      <Header />
      <div className="col-md-2 col-sm-12 m-0 p-0">
        <SideBar />
      </div>
      <div className="col-md-10 col-sm-12 m-0 p-0">
        <SearchResultContainer />
      </div>
    </div>
  );
};

export default HomePage;
