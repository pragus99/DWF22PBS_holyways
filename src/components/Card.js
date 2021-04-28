import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import convert from "./service/convert";
import { UserContext } from "./service/userContext";
import Modal from "./modal/Modal";
import Login from "./modal/Login";
import Register from "./modal/Register";

const Card1 = ({ data, button, link }) => {
  const [state] = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const toggleToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const toggleToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <>
      <Modal show={showLogin} handleClose={handleCloseLogin}>
        <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
      </Modal>
      <Modal show={showRegister} handleClose={handleCloseRegister}>
        <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
      </Modal>

      {data.map((content, index) => (
        <div className="card1" key={index + content.id + 1}>
          <img className="card1-img" src={content.img} alt="" />
          <div className="card1-body">
            <div>
              <h1 className="card1-title">{content.title}</h1>
            </div>
            <div className="card1-content">
              <p>{content.description}</p>
            </div>
            <progress
              className="progress"
              value={content.money}
              max={content.goal}
            ></progress>
            <div className="card1-footer">
              <p>
                Rp {content.money === undefined ? "0" : convert(content.money)}
              </p>

              {state.login ? (
                <Link to={`/${link}/${content.id}`}>
                  <button className="card1-btn">{button}</button>
                </Link>
              ) : (
                <label
                  onClick={handleShowLogin}
                  className="link-login card1-btn"
                >
                  Donate
                </label>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card1;
