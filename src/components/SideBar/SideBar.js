import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar min-vh-100 w-100 px-0 m-0">
      <h5 className="text-white p-3">Find a rental property</h5>
      <div className="mx-auto filter-container mt-1">
        <div className="search-area m-0 p-0 bc-dark rounded-3 h-78 my-1">
          <p className="px-2 filter-text">Search Area</p>
          <input
            type="search"
            id="search"
            placeholder="Oxford or NW3"
            class="form-control bc-dark border-0"
            aria-describedby="passwordHelpInline"
          ></input>
        </div>
        <div className="max-min-container d-flex flex-wrap m-0 p-0 my-1 justify-content-between">
          <div className="max-beds bc-dark rounded-3 w-48 px-2 h-68 my-1">
            <p className="px-2 filter-text">Maximum beds</p>
            <select
              className="form-select bc-dark option-height mt-2 text-white"
              aria-label="Default select example"
            >
              <option selected>No max</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="min-beds bc-dark rounded-3 w-48 px-2 h-68 my-1">
            <p className="px-2 filter-text">Minimum beds</p>
            <select
              className="form-select bc-dark option-height mt-2 text-white"
              aria-label="Default select example"
            >
              <option selected>No max</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="search-area m-0 p-0 bc-dark rounded-3 h-68">
          <p className="px-2 filter-text">Price per</p>
          <select
            className="form-select bc-dark option-height mt-2 text-white"
            aria-label="Default select example"
          >
            <option selected>Month</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="max-min-container d-flex flex-wrap m-0 p-0 my-1 justify-content-between">
          <div className="max-beds bc-dark rounded-3 w-48 px-2 h-68 my-1">
            <p className="px-2 filter-text">Maximum price</p>
            <select
              className="form-select bc-dark option-height mt-2 text-white"
              aria-label="Default select example"
            >
              <option selected>No max</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="min-beds bc-dark rounded-3 w-48 px-2 h-68 my-1">
            <p className="px-2 filter-text">Minimum price</p>
            <select
              className="form-select bc-dark option-height mt-2 text-white"
              aria-label="Default select example"
            >
              <option selected>No min</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <button className="sidebar-button text-white h-58 my-1">
          FIND PROPERTIES
        </button>
      </div>
    </div>
  );
};

export default SideBar;
