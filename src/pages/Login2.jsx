import "../styles/login2.css";
import { useNavigate } from "react-router-dom";

export default function Login2() {
  const navigate = useNavigate();

  return (
    <div className="anim-container">
      
      {/* BACKGROUND PARTICLES */}
      <div className="particle-layer">
        <span className="particle" style={{ left: "15%", animationDelay: "0s" }} />
        <span className="particle" style={{ left: "35%", animationDelay: "2s" }} />
        <span className="particle" style={{ left: "55%", animationDelay: "4s" }} />
        <span className="particle" style={{ left: "75%", animationDelay: "6s" }} />
      </div>

      {/* LOGIN CARD */}
      <div className="anim-card">
        <h1>Sign in</h1>
        <p>Welcome back</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="button">Continue</button>
      </div>

      {/* UI NAVIGATION */}
      <button
        className="ui-next-btn"
        onClick={() => navigate("/login3")}
      >
        Next UI →
      </button>
    </div>
  );
}
