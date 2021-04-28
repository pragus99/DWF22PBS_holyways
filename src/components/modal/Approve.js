import { useState } from "react";
import { useParams } from "react-router";

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../../assets/download.jpg";

const Approve = () => {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nominal, setNominal] = useState("");

  return (
    <>
      <button className="card1-btn fund-btn" onClick={handleShow}>
        View
      </button>

      <Modal centered show={show} onHide={handleClose}>
        <div className="modal-content">
          <div className="modal1 modal1-donate">
            <h2 className="title-approve">Andi</h2>
            <form className="form-modal1">
              <input
                className="input-approve"
                type="text"
                placeholder="45.000.000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
              <img className="img-approve" src={Img} alt="" />
              <Link
                to={id}
                onClick={handleClose}
                className="btn-modal1 btn-approve"
              >
                Approve
              </Link>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Approve;
