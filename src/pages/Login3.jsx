import "../styles/login3.css";
import { useNavigate } from "react-router-dom";

export default function Login3() {
  const navigate = useNavigate();

  return (
    <div className="dark-container">
      {/* LOGIN UI */}
      <div className="dark-card">
        <h1>Sign in</h1>
        <p>Enter your credentials</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>

      {/* UI NAVIGATION (SEPARATE) */}
      <button
        className="ui-next-btn"
        onClick={() => navigate("/login4")}
      >
        Next UI →
      </button>
    </div>
  );
}
