import "../styles/login1.css";
import { useNavigate } from "react-router-dom";

export default function Login1() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* LOGIN CARD (UNCHANGED) */}
      <div className="login-card">
        <h1>Sign in</h1>
        <p>Access your account to continue</p>

        <form>
          <input type="email" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />

          <button className="forgot">Forgot password?</button>


          <button type="submit">Sign in</button>
        </form>

        <div className="divider">or</div>

        <button className="google-btn">Continue with Google</button>

        <p className="join">
          New here? <span>Create an account</span>
        </p>
      </div>

      {/* SEPARATE NEXT BUTTON */}
      <button
        className="ui-next-btn"
        onClick={() => navigate("/login2")}
      >
        Next UI →
      </button>
    </div>
  );
}
