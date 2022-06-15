import "./Navbar.css";
import { Link } from "react-router-dom";
import "../Pages/Auth/Login";
export default function Navbar() {
  return (
    <>
      <div className="Nav">
        <nav>
          <div className="NavMenu">
            <Link to="/">Home</Link>
            <Link to="/auth/login">Login</Link>
            <Link to="/mousetrap">Click Here to Start</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
