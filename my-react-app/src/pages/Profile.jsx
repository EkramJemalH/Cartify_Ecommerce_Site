import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="profile-container">
        <div className="profile-card">

          {/* Header */}
          <div className="profile-header">
            <img src={user.avatar} alt="User Avatar" />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>

          {/* Stats / Info */}
          <div className="profile-stats">
            <div>
              <h3>12</h3>
              <p>Orders</p>
            </div>
            <div>
              <h3>5</h3>
              <p>Wishlist</p>
            </div>
            <div>
              <h3>3</h3>
              <p>Reviews</p>
            </div>
          </div>

          {/* Links */}
          <div className="profile-links">
            <Link to="/orders" className="profile-link">
              🛒 My Orders
            </Link>
            <Link to="/wishlist" className="profile-link">
              ❤️ Wishlist
            </Link>
            <Link to="/settings" className="profile-link">
              ⚙️ Account Settings
            </Link>
          </div>

          {/* Logout */}
          <button className="logout-btn">Logout</button>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;