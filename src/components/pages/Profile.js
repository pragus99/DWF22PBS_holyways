import { useParams } from "react-router";
import useFetch from "../service/useFetch";

function Profile() {
  const { id } = useParams();
  const { data: user, loading } = useFetch("http://localhost:8000/user/" + id);

  return (
    <>
      {loading && <div className="loading">Loading...</div>}

      {user && (
        <div className="container-profile">
          <div className="profile">
            <h1>My Profile</h1>
            <div className="profile-detail">
              <div className="profile-img">
                <img src={user.img} alt="#" />
              </div>
              <div className="profile-content">
                <h6>Full Name</h6>
                <p>{user.fullname}</p>
                <h6>Email</h6>
                <p>{user.email}</p>
                <h6>Phone</h6>
                <p>09384843</p>
              </div>
            </div>
          </div>
          <div className="transactions">
            <h1>History Donation</h1>
            <div className="list-donation">
              <div className="donation">
                <div className="donation-body">
                  <h3>The Strength of a People. Power of Community</h3>
                  <p>
                    <i>Sunday</i>, 13 April 2021
                  </p>
                </div>
                <div className="donation-footer">
                  <p>Total : Rp 45.000</p>
                  <p className="condition">Finished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
