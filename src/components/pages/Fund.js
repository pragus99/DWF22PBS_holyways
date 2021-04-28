import Card from "../Card";
import useFetch from "../service/useFetch";
import { Link } from "react-router-dom";

const Fund = () => {
  const { data, loading, error } = useFetch("http://localhost:7000/data");

  return (
    <div>
      <div className="header-fund">
        <h1>My Raise Fund</h1>
        <Link to="/form">
          <button className="card1-btn fund-btn">Make Raise Fund</button>
        </Link>
      </div>
      {data && (
        <div className="cards1">
          <Card data={data} button="View Fund" link="view" />
        </div>
      )}
      {error && <div className="loading">Can't fetch data api...</div>}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Fund;
