import ContactForm from "./ContactForm";

const PHONE = "(832) 498-7743";
const TEL = "+18324987743";

const services = [
  ["Drywall and paint", "Patch holes, fix cracks and texture, then paint so the repair disappears."],
  ["Doors and windows", "Sticking doors, new locks and hinges, weatherstripping, screens and trim."],
  ["Fixtures and installs", "Ceiling fans, lights, faucets, shelves, TV mounts and curtain rods."],
  ["Carpentry", "Baseboards, crown molding, cabinet repair, decks and fence boards."],
  ["Small plumbing and electrical", "Leaky faucets, running toilets, outlets and switches. Licensed trades for larger work."],
  ["Punch lists", "Got a list of little jobs? We knock them out in one visit."],
];

const areas = [
  "Heights", "Montrose", "River Oaks", "Memorial", "Bellaire", "West University",
  "Galleria", "Spring Branch", "Katy", "Sugar Land", "The Woodlands", "Pearland",
];

const reviews = [ // SAMPLE TEXT: replace with real customer reviews before launch
  ["Sample review: replace with a real customer quote about arriving on time and leaving the house spotless.", "Customer name, Heights"],
  ["Sample review: replace with a real quote about a repair that looked seamless.", "Customer name, Bellaire"],
  ["Sample review: replace with a real quote about clear pricing and communication.", "Customer name, Katy"],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a className="logo" href="#home">Quiet Clean Repairs</a>
        <nav aria-label="Main">
          <a href="#services">Services</a>
          <a href="#areas">Service Areas</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn small" href={`tel:${TEL}`}>{PHONE}</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="wrap">
            <h1>Home repairs done quietly, cleanly, and right.</h1>
            <p className="lead">
              Houston handyman service for homeowners who want the job finished well and the house left
              cleaner than we found it.
            </p>
            <div className="actions">
              <a className="btn" href="#contact">Get a free estimate</a>
              <a className="btn ghost" href={`tel:${TEL}`}>Call {PHONE}</a>
            </div>
          </div>
          <div className="tape" aria-hidden="true" />
        </section>

        <section id="services" className="section">
          <div className="wrap">
            <h2>Services</h2>
            <p className="sub">From one leaky faucet to a full weekend of fixes.</p>
            <div className="grid">
              {services.map(([t, d]) => (
                <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="section tint">
          <div className="wrap split">
            <div>
              <h2>Service areas</h2>
              <p className="sub">We work across Greater Houston. Don&apos;t see your neighborhood? Ask, we probably cover it.</p>
            </div>
            <ul className="chips">{areas.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap split">
            <div>
              <h2>About us</h2>
              <p className="sub">Repairs shouldn&apos;t disrupt your home.</p>
            </div>
            <div className="prose">
              <p>Quiet Clean Repairs is a Houston handyman business built around respect for your space. We lay down floor protection, keep noise and dust in check, and vacuum before we leave.</p>
              <p>You get a clear written estimate, an arrival window we keep, and honest advice about when a job needs a licensed specialist.</p>
              <ul className="ticks">
                <li>Upfront, written pricing</li>
                <li>Floor protection and full cleanup</li>
                <li>Respectful of pets, kids and work-from-home schedules</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="reviews" className="section tint">
          <div className="wrap">
            <h2>Reviews</h2>
            <div className="grid">
              {reviews.map(([q, n]) => (
                <figure key={n} className="card quote"><blockquote>{q}</blockquote><figcaption>{n}</figcaption></figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap split">
            <div>
              <h2>Request an estimate</h2>
              <p className="sub">Tell us about the job. We&apos;ll reply within one business day.</p>
              <p><a className="phone" href={`tel:${TEL}`}>{PHONE}</a></p>
              <p className="muted">Mon to Sat, 8am to 6pm</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} Quiet Clean Repairs · Houston, TX</div>
      </footer>
    </>
  );
}
