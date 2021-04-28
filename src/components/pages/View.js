import { useParams } from "react-router";
import useFetch from "../service/useFetch";
import convert from "../service/convert";
import Donate from "../modal/Donate";
import Approve from "../modal/Approve";

const View = () => {
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
                <h3>Udin</h3>
                <p>
                  <i>Saturday</i>, 12 April 2021
                </p>
                <p>Total: Rp 45. 0000</p>
              </div>
              <div className="list">
                <h3>Udin</h3>
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

          <div className="list-container">
            <h1 className="list-title">Donation has not been approved (10)</h1>
            <div className="list-donation">
              <div className="list wait-approve">
                <div>
                  <h3>Andi</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 45.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
              <div className="list wait-approve">
                <div>
                  <h3>Carrot</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 55.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
              <div className="list wait-approve">
                <div>
                  <h3>Apple</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 25.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
              <div className="list wait-approve">
                <div>
                  <h3>Orange</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 15.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
              <div className="list wait-approve">
                <div>
                  <h3>Grape</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 95.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
              <div className="list wait-approve">
                <div>
                  <h3>Grape</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 95.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>{" "}
              <div className="list wait-approve">
                <div>
                  <h3>Grape</h3>
                  <p>
                    <i>Saturday</i>, 12 April 2021
                  </p>
                  <p>Rp 95.000</p>
                </div>
                <div>
                  <Approve />
                </div>
              </div>
            </div>
          </div>
          <label className="load">Load More</label>
        </div>
      )}
    </>
  );
};

export default View;
