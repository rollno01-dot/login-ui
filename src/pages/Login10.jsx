import "../styles/login10.css";
import { useNavigate } from "react-router-dom";

export default function Login10() {
  const navigate = useNavigate();

  return (
    <div className="final-bg">
      <div className="final-card">
        <h1>Login UI Showcase</h1>
        <p>10 unique login experiences</p>

        <ul>
          <li>Professional</li>
          <li>Animated Gradient</li>
          <li>Dark Mode</li>
          <li>Glassmorphism</li>
          <li>Ultra Minimal</li>
          <li>Split Screen</li>
          <li>Mobile First</li>
          <li>Neon / Cyber</li>
          <li>Icon Centric</li>
        </ul>

        <button
          className="restart-btn"
          onClick={() => navigate("/login1")}
        >
          Restart Demo ↺
        </button>
      </div>
    </div>
  );
}
