import { useState } from "react";

const Uploader = ({ pictureSelected, button }) => {
  const [preview, setPreview] = useState(null);

  const handlePicture = (e) => {
    // Web API. see documentation from MDN
    pictureSelected(e.target.files[0]);
    let reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="uploader">
      <input type="file" id="upload" onChange={handlePicture} />
      {button}
      {preview && (
        <div className="img-preview">
          <img src={preview} alt="icon" width="200" />
        </div>
      )}
    </div>
  );
};

export default Uploader;
