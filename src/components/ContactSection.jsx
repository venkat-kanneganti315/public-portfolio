import React, { useState } from "react";

const SHEETS_WEB_APP = "https://script.google.com/macros/s/AKfycbxRCxJZsr0-1TYHziFvEkiPgRfGcI_7eiSpOBk8Ibs0ciGTWltmwNMuT8LUbak47rZY/exec"; // <-- paste yours

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      await fetch(SHEETS_WEB_APP, {
        method: "POST",
        mode: "no-cors", // GAS allows; we don't read the response
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("Thanks! I’ll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-grid">
        <div className="left">
          <h2 className="title">Contact Me</h2>
          <p className="muted">I read every message. Tell me what you’re building.</p>
          <a className="btn" href="/cv/sivasaikResume.docx" download>
            <span className="btn-icon">⬇</span><span>Download CV</span>
          </a>
        </div>

        <div className="card">
          <form className="form" onSubmit={onSubmit}>
            <input className="input" name="name" placeholder="Your Name"
              value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
            <input className="input" type="email" name="email" placeholder="Your Email"
              value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
            <textarea className="input textarea" name="message" rows={8} placeholder="Your Message"
              value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
            <button className="btn submit" type="submit">Submit</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
