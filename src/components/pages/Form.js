import { useState } from "react";
import { useHistory } from "react-router-dom";
import Uploader from "../Uploader";

const Form = () => {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [selectPic, setSelectPic] = useState(null);
  const [description, setDescription] = useState("");

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    const fund = { title, goal, description };
    fetch("http://localhost:7000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fund),
    }).then(() => {
      history.push("/fund");
    });
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="raisefund-title">Make Raise Fund</h2>
        <form className="form-modal1 raisefund-form" onSubmit={submitForm}>
          <input
            className="input-modal1"
            type="text"
            required
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Uploader
            pictureSelected={(file) => setSelectPic(file)}
            button={
              <label for="upload" className="fund-btn card1-btn attach-btn">
                Attach Thumbnail
              </label>
            }
          />
          <input
            className="input-modal1"
            type="number"
            required
            placeholder="Goal Donation"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <input
            className="input-modal1 description"
            type="text"
            required
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="container-fundbtn">
            <button className="fund-btn card1-btn publicfund-btn">
              Public Fundraising
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
