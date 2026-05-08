import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import "./Login.css";

function Login() {
  const navigate = useNavigate(); // Add this for redirecting
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      
      // Check if the username matches (in a real app, you'd check password too)
      if (user.name.toLowerCase() === username.toLowerCase()) {
        alert(`Welcome back, ${username}!`);
        navigate("/profile"); // Redirect to profile page
      } else {
        setError("User not found. Please sign up first.");
      }
    } else {
      setError("No account found. Please sign up first.");
    }
  };

  return (
    <div className="login-container">
      {/* Left side */}
      <div className="login-left">
        <h1>Hello <br /> welcome back</h1>
      </div>

      {/* Right side */}
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>{error}</p>}
          
          <button type="submit" className="login-btn">LOGIN</button>

          <p className="forgot-password">Forgot Password?</p>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;