import "../styles/login6.css";
import { useNavigate } from "react-router-dom";

export default function Login6() {
  const navigate = useNavigate();

  return (
    <div className="split-page">
      <div className="left">
        <h1>Welcome Back</h1>
        <p>Sign in to continue</p>
      </div>

      <div className="right">
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>

      <button className="ui-next-btn" onClick={() => navigate("/login7")}>
        Next UI →
      </button>
    </div>
  );
}
