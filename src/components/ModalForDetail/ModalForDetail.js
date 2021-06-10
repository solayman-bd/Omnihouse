import React from "react";
import GoogleMap from "../../images/google-maps.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import Modal from "react-modal";
import { fakeDataWithDetails } from "../../FakeData/fakeDataWithDetails";
import { GiSofa } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { FaToilet } from "react-icons/fa";
import { BsEnvelopeOpenFill } from "react-icons/bs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80%",
    overFlow: "auto",
    borderRadius: "20px",
    width: "50%",

    backgroundColor: "#18121A",
    color: "white",
  },
};

Modal.setAppElement("#root");

const ModalForDetail = ({ modalIsOpen, closeModal, id }) => {
  const filteredData = fakeDataWithDetails.filter((data) => data.id === id);

  const {
    bed,
    comment,
    condition,
    detail,
    image,
    name,
    position,
    price,
    sofa,
    toilet,
  } = filteredData[0];
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row details-container">
          <div className="text-end text-white d-inline-block ms-auto">
            {" "}
            <span className="mx-1">
              <FiShare />
            </span>
            <span onClick={closeModal} style={{ cursor: "pointer" }}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="col-12 my-1">
            <div className="mx-2">
              <img src={image} alt="" className="mx-auto rounded my-2" />
            </div>
          </div>
          <div className="col-12 my-1">
            <div className="row">
              <div className="col-8">
                <h5>{name}</h5>
              </div>
              <div className="col-4">
                <p className="text-end env ">
                  <BsEnvelopeOpenFill />
                </p>
              </div>
            </div>
            <div>
              <p className="mx-2">€ {price} pcm</p>
            </div>
            <div className="row my-2">
              <div className="col-3">
                <p>
                  {" "}
                  <BiBed />
                  {bed}
                  <GiSofa />
                  {sofa} <FaToilet />
                  {toilet}
                </p>
              </div>
              <div className="col-4">
                <p>
                  {" "}
                  <FiGlobe /> {position}
                </p>
              </div>
              <div className="col-2">
                <p>{condition}</p>
              </div>
              <div className="col-3">
                <p>{comment}</p>
              </div>
            </div>
            <hr />
            <div>
              <img src={GoogleMap} className="rounded img-fluid my-2" alt="" />
            </div>

            <div>
              <p>{detail}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForDetail;
