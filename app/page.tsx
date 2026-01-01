export default function HomePage() {
  return (
    <main className="container">

      {/* TOP NAV */}
      <nav className="top-nav">
        <div className="nav-left">
          <span className="logo">Truth</span>
          <span className="date">
            {new Date().toDateString()}
          </span>
        </div>

        <div className="nav-links">
          <a>India</a>
          <a>Politics</a>
          <a>Defence</a>
          <a>Business</a>
          <a>World</a>
          <a>Opinion</a>
        </div>
      </nav>

      {/* MAIN LEAD STORY */}
      <section className="lead-story">
        <div className="lead-text">
          <h1>
            Dozens feared dead, around 100 injured in Switzerland ski resort explosion
          </h1>
          <p>
            The blast took place at 01:30 local time. Authorities rule out terror attack.
          </p>
          <span className="meta">
            World · Indian Express
          </span>
        </div>

        <img
          src="/news-placeholder.jpg"
          alt="Lead news"
          className="lead-image"
        />
      </section>

      {/* GRID STORIES */}
      <section className="news-grid">
        <div className="grid-left">
          <h3>SIT’s big revelation in Sabarimala scandal</h3>
          <img src="/news-placeholder.jpg" />
          <p>Gold missing from more temple artefacts</p>
        </div>

        <div className="grid-middle">
          <ul>
            <li>Madras HC allows stupa for 1755 war heroes</li>
            <li>Nagpur neurosurgeon dies of heart attack</li>
            <li>Behind gig workers’ New Year strike</li>
          </ul>
        </div>

        <div className="grid-right">
          <h4>Advertisement</h4>
          <div className="ad-box">AD SPACE</div>
        </div>
      </section>

    </main>
  );
}
