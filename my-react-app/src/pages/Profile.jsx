import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        
        // Validate that the user has required fields
        if (!parsedUser.name || !parsedUser.email) {
          console.error("Invalid user data structure");
          localStorage.removeItem("user");
          navigate("/login");
        } else {
          // Provide default avatar if missing
          if (!parsedUser.avatar) {
            parsedUser.avatar = "https://via.placeholder.com/100";
          }
          setUser(parsedUser);
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Show loading indicator while checking authentication
  if (loading) {
    return (
      <div className="page-wrapper">
        <Nav />
        <main className="profile-container">
          <div className="loading-spinner">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <img 
              src={user.avatar} 
              alt={`${user.name}'s avatar`}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100";
                e.target.onerror = null; // Prevent infinite loop
              }}
            />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>

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

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;