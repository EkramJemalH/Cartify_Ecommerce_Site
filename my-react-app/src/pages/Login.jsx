import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${username}`);
  };

  return (
    <div className="login-container">
      {/* Left side */}
      <div className="login-left">
  <div className="circle large"></div>
  <div className="circle small"></div>
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