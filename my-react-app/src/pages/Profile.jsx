import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  // Mock user data
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
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <div className="profile-links">
            <Link to="/orders" className="profile-link">
              🛒 Orders
            </Link>
            <Link to="/wishlist" className="profile-link">
              ❤️ Wishlist
            </Link>
            <Link to="/settings" className="profile-link">
              ⚙️ Settings
            </Link>
          </div>

          <button className="logout-btn">Logout</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;