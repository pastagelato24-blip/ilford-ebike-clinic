import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Ilford E-Bike Clinic</h1>
      <p>Professional repairs for e-bikes, e-scooters and electric mopeds.</p>
      <p>Fast tyre replacement, brake service, diagnostics and battery repairs.</p>
      <p>WhatsApp: +44 7510 935262</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
