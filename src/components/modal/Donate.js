import { useState } from "react";
import Payment from "../../assets/payment.svg";
import Uploader from "../Uploader";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const [nominal, setNominal] = useState("");
  const [selectPic, setSelectPic] = useState(null);

  const handleDonation = (e) => {
    e.preventDefault();
    const donation = { nominal };
    // const donation = { nominal, selectPic };
    fetch("http://localhost:8900/donation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donation),
    }).then(() => {
      history.push("/profile/1");
    });
  };

  return (
    <>
      <button className="btn-modal1 btn-viewdonate" onClick={handleShow}>
        Donate
      </button>

      <Modal centered show={show} onHide={handleClose}>
        <div className="modal-content">
          <div className="modal1 modal1-donate">
            <form className="form-modal1" onSubmit={handleDonation}>
              <input
                className="input-modal1"
                type="number"
                required
                placeholder="Nominal Donation"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
              <div className="modal1-payment">
                <Uploader
                  pictureSelected={(file) => setSelectPic(file)}
                  button={
                    <label for="upload" className="btn-modal1 btn-payment">
                      Attach Payment
                      <img className="img-payment" src={Payment} alt="#" />
                    </label>
                  }
                />
                <p>*transfers can be made to holyways accounts</p>
              </div>
              <button className="btn-modal1">Donate</button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
