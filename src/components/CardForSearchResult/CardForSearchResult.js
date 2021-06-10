import React, { useState } from "react";
import { GiSofa } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import "./CardForSearchResult.css";
import ModalForDetail from "../ModalForDetail/ModalForDetail";

const CardForSearchResult = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { image, name, position, price, sofa, bed, comment, id } = props.data;
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

          <div className="row m-0 p-0">
            <div className="col-9 m-0 p-0">
              <button
                onClick={openModal}
                className="card-button border-0 mt-1 p-1"
              >
                <GoTasklist /> Detail Features
              </button>
              {modalIsOpen ? (
                <ModalForDetail
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                  id={id}
                ></ModalForDetail>
              ) : null}
            </div>
            <div className="col-3 m-0 p-0">
              <p className="text-end env ">
                <BsEnvelopeOpenFill />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForSearchResult;
