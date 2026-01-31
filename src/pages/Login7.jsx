import "../styles/login7.css";
import { useNavigate } from "react-router-dom";

export default function Login7() {
  const navigate = useNavigate();

  return (
    <div className="kid-bg">
      {/* Floating objects */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="balloon balloon-1"></div>
      <div className="balloon balloon-2"></div>

      {/* Card */}
      <div className="kid-card">
        <h2>👋 Hello Friend!</h2>
        <p>Let’s start learning</p>

        <input type="text" placeholder="Your Name" />
        <input type="password" placeholder="Secret Code" />

        <button className="kid-btn">Let’s Go 🚀</button>
      </div>

      <button className="ui-next-btn" onClick={() => navigate("/login8")}>
        Next UI →
      </button>
    </div>
  );
}
