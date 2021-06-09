import React from "react";
import { fakeData } from "../../FakeData/fakedata";
import CardForSearchResult from "../CardForSearchResult/CardForSearchResult";
import "./SearchResultContainer.css";

const SearchResultContainer = () => {
  return (
    <div className="row mx-auto bg-dark mt-5 search-result-container">
      <h4 className="p-3">15 Search Result</h4>
      <div className="col-12 ">
        {fakeData.map((data) => (
          <CardForSearchResult data={data} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultContainer;
