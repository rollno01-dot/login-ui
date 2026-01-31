import "../styles/login8.css";
import { useNavigate } from "react-router-dom";

export default function Login8() {
  const navigate = useNavigate();

  return (
    <div className="neon-bg">
      {/* LOGIN UI */}
      <div className="neon-card">
        <h1 className="neon-title">ACCESS</h1>

        <input type="email" placeholder="USER ID" />
        <input type="password" placeholder="PASSWORD" />

        <button className="neon-btn">ENTER</button>
      </div>

      {/* UI NAVIGATION */}
      <button
        className="ui-next-btn"
        onClick={() => navigate("/login9")}
      >
        Next UI →
      </button>
    </div>
  );
}
