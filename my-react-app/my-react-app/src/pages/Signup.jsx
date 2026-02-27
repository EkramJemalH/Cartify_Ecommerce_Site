import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // new state
  const [error, setError] = useState(""); // for password mismatch

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // reset error if passwords match
    alert(`Account created for: ${username}`);
    // here you can also handle actual signup logic
  };

  const handleGoogleSignup = () => {
    alert("Google signup clicked!");
    // integrate Google OAuth here if needed
  };

  return (
    <div className="signup-container">
      {/* Left side */}
      <div className="signup-left">
        <h1>Hello <br /> Welcome</h1>
      </div>

      {/* Right side */}
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