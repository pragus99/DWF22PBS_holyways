import { useParams } from "react-router";
import useFetch from "../service/useFetch";
import convert from "../service/convert";
import Donate from "../modal/Donate";

const Detail = () => {
  const { id } = useParams();
  const { data, loading } = useFetch("http://localhost:7000/data/" + id);

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {data && (
        <div className="container-detail">
          <div className="detail">
            <div className="detail-img">
              <img src={data.img} alt="" />
            </div>
            <div className="detail-content">
              <h1>{data.title}</h1>
              <div className="detail-progress">
                <div className="progress-money">
                  <p>
                    <i>Rp {convert(data.money)}</i>
                  </p>
                  <p>gathered from</p>
                  <p>
                    <i>Rp {convert(data.goal)}</i>
                  </p>
                </div>
                <progress
                  className="progress"
                  value={data.money}
                  max={data.goal}
                ></progress>
                <div className="deadline">
                  <p>
                    <i className="number">{data.people}</i> Donation
                  </p>
                  <p>
                    <i className="number">{data.deadline}</i> More Day
                  </p>
                </div>
              </div>
              <p className="detail-description">{data.description}</p>
              <Donate />
            </div>
          </div>

          <div className="list-container">
            <h1 className="list-title">List Donation (200)</h1>
            <div className="list-donation">
              <div className="list">
                <h3>Andi</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>Jamal</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>knight</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>chevalier</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>baronet</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>baron</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>duke</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
            </div>
          </div>
          <label className="load">Load More</label>
        </div>
      )}
    </>
  );
};

export default Detail;
