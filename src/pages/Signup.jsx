import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for: ${username}`);
  };

  return (
    <div className="signup-container">
      {/* Left side */}
      <div className="signup-left">
        <div className="circle large"></div>
        <div className="circle small"></div>
        <h1>Join us <br /> and get started!</h1>
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

          <button type="submit" className="signup-btn">SIGN UP</button>

          <p className="login-text">
            Already have an account? <Link to="/login" className="login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;