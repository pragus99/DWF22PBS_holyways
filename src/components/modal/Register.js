import { useHistory } from "react-router-dom";
import { useState } from "react";

const Register = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = { email, password, fullName };
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <div className="container-modal1">
        <div className="modal1">
          <h2 className="title-modal1">Register</h2>
          <form className="form-modal1" onSubmit={handleRegister}>
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
            <input
              className="input-modal1"
              type="text"
              required
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <button className="btn-modal1">Register</button>
          </form>
          <p className="text-modal1">
            Already have an account ? Click{" "}
            <label onClick={toggle} className="text-here">
              here
            </label>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
