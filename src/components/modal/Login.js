import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../service/userContext";

const Login = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const [, dispatch] = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.map((users) => {
          if (email === users.email && password === users.password) {
            return [
              dispatch({
                type: "login",
              }),
              history.push("/"),
            ];
          } else {
            alert("Wrong password/email");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="modal-content">
        <div className="modal1">
          <h2 className="title-modal1">Login</h2>
          <form className="form-modal1" onSubmit={handleLogin}>
            <input
              className="input-modal1"
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-modal1"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-modal1">Login</button>
          </form>
          <p className="text-modal1">
            Don't have an account ? Click{" "}
            <label onClick={toggle} className="text-here">
              here
            </label>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
