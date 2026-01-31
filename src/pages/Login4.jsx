import "../styles/login4.css";
import { useNavigate } from "react-router-dom";

export default function Login4() {
  const navigate = useNavigate();

  return (
    <div className="glass-bg">
      <div className="glass-card">
        <h1>Welcome</h1>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>

      <button className="ui-next-btn" onClick={() => navigate("/login5")}>
        Next UI →
      </button>
    </div>
  );
}
