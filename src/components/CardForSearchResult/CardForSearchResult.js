import React from "react";
import { GiSofa } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import "./CardForSearchResult.css";
const CardForSearchResult = (props) => {
  console.log(props.data);
  const { image, name, position, price, sofa, bed, comment } = props.data;
  return (
    <div className="row cards-design my-2 align-items-center">
      <div className="col-md-4">
        <img className="img-card mt-2" src={image} alt="" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>€ {price} pcm</p>
          <p>
            <GiSofa /> {sofa} <BiBed /> {bed}
          </p>

          <p className="card-text ">
            <span className="globe mx-1">
              <FiGlobe />
            </span>
            {position}
          </p>
          <p>{comment}</p>
          <p className="text-end env">
            <BsEnvelopeOpenFill />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardForSearchResult;
