import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SurakshaAI</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/plan">Plans</Link>
        <Link to="/claim">Claims</Link>
      </div>
    </nav>
  );
}