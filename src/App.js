import "./styles.css";
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Game from "./Pages/Mousetrap";
import Leaderboard from "./Pages/Leaderboard";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/mousetrap" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}
