import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import "./Signup.css";

function Signup() {
  const navigate = useNavigate(); // Add this for redirecting
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    // Create user object to store in localStorage
    const userData = {
      name: username,
      email: email,
      avatar: "https://via.placeholder.com/100" // Default avatar, you can change this
    };

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Show success message
    alert(`Account created for: ${username}`);
    
    // Redirect to profile page
    navigate("/profile");
  };

  const handleGoogleSignup = () => {
    alert("Google signup clicked!");
    // For Google signup, you would typically get user data from Google
    // Then save similar data to localStorage
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Hello <br /> Welcome</h1>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="signup-btn">SIGN UP</button>

          <p className="divider">or</p>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignup}
          >
            Continue with Google
          </button>

          <p className="login-text">
            Already have an account? <Link to="/login" className="login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;