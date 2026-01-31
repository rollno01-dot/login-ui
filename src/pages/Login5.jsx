import "../styles/login5.css";
import { useNavigate } from "react-router-dom";

export default function Login5() {
  const navigate = useNavigate();

  return (
    <div className="mini-page">
      <div className="mini-box">
        <h1>Hello.</h1>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>

      <button className="ui-next-btn" onClick={() => navigate("/login6")}>
        Next UI →
      </button>
    </div>
  );
}
