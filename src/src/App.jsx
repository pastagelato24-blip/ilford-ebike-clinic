import React from "react";

export default function Site() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Ilford E-Bike Clinic</h1>
      <p>Professional repairs for e-bikes, electric scooters, and electric mopeds.</p>
      <p>Inner tubes, tyres, brakes, wiring, controllers, displays and battery diagnostics.</p>
      <p>WhatsApp: +44 7510 935262</p>
      <h2 style={{ marginTop: "20px" }}>Services</h2>
      <ul>
        <li>✅ Inner tube / tyre replacement</li>
        <li>✅ Brake pads & discs</li>
        <li>✅ Gear adjustments</li>
        <li>✅ Electrical diagnostics</li>
        <li>✅ Wiring repair</li>
        <li>✅ Battery tests (36V/48V)</li>
        <li>✅ NIU / Super Soco repairs</li>
      </ul>
      <h2 style={{ marginTop: "20px" }}>Price List</h2>
      <ul>
        <li>Inner tube: £20–£30</li>
        <li>Brake pads: £20–£25</li>
        <li>Diagnostics: £15–£25</li>
        <li>Wiring repair: £20–£50</li>
        <li>Moped diagnostics: £25–£40</li>
      </ul>
      <a
        href="https://wa.me/447510935262?text=Hi%2C%20I%20need%20a%20repair%20quote"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Contact on WhatsApp
      </a>
    </div>
  );
}
