import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Protect Your Income<br />with AI Insurance</h1>
      <p>
        Get automatic payouts when disruptions like rain or heat affect your work.
      </p>
      <button onClick={() => navigate("/plan")}>
        Get Started
      </button>
    </div>
  );
}