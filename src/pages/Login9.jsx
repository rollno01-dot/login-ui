import "../styles/login9.css";
import { useNavigate } from "react-router-dom";

export default function Login9() {
  const navigate = useNavigate();

  return (
    <div className="icon-bg">
      {/* LOGIN UI */}
      <div className="icon-card">
        <div className="icon-avatar"></div>

        <h2>Welcome back</h2>

        <div className="icon-input">
          <span></span>
          <input type="email" placeholder="Email" />
        </div>

        <div className="icon-input">
          <span></span>
          <input type="password" placeholder="Password" />
        </div>

        <button className="icon-btn">Sign in</button>
      </div>

      {/* UI NAVIGATION */}
      <button
        className="ui-next-btn"
        onClick={() => navigate("/login10")}
      >
        Next UI →
      </button>
    </div>
  );
}
