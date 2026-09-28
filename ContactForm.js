"use client";
import { useState } from "react";

const EMAIL = "quietcleantx@gmail.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    const subject = encodeURIComponent(`Estimate request: ${d.service}`);
    const text = encodeURIComponent(
      `Name: ${d.name}\nPhone: ${d.phone}\nNeighborhood/ZIP: ${d.zip}\nService: ${d.service}\n\n${d.details}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${text}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>Neighborhood or ZIP<input name="zip" required /></label>
      <label>What do you need?
        <select name="service" defaultValue="Small repairs">
          <option>Small repairs</option><option>Drywall and paint</option>
          <option>Doors and windows</option><option>Fixtures and installs</option>
          <option>Carpentry</option><option>Other</option>
        </select>
      </label>
      <label className="wide">Details<textarea name="details" rows={4} placeholder="Describe the job, and add any deadlines." /></label>
      <button className="btn" type="submit">Request a free estimate</button>
      {sent && <p className="note" role="status">Your email app should open with the request ready to send. You can also call us.</p>}
    </form>
  );
}
