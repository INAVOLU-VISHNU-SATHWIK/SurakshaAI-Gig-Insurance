import { useNavigate } from "react-router-dom";

export default function Plan() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Your Plan</h2>

      <div className="card">
        <h3>Basic Plan</h3>
        <p>₹50/week</p>
        <button onClick={() => navigate("/dashboard")}>
          Buy Plan
        </button>
      </div>
    </div>
  );
}