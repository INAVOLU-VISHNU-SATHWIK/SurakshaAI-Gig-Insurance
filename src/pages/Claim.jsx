import { useState } from "react";

export default function Claim() {
  const [message, setMessage] = useState("");

  const triggerRain = () => {
    setMessage("Heavy Rain Detected 🌧️ → ₹300 Payout Initiated!");
  };

  const triggerHeat = () => {
    setMessage("Extreme Heat Detected ☀️ → ₹250 Payout Initiated!");
  };

  return (
    <div className="container">
      <h2>Simulate Disruption</h2>

      <button onClick={triggerRain}>Trigger Heavy Rain</button>
      <p> </p>
      <button onClick={triggerHeat}>Trigger Heat</button>

      {message && <p className="success">{message}</p>}
    </div>
  );
}