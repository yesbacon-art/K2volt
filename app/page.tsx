const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="K2VOLT home">
          <span className="brand-crop">
            <img src="/k2volt-logo.png" alt="K2VOLT" />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#platform">Technology</a>
          <a href="#company">Company</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Start a project <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow"><span /> American-owned energy technology</p>
          <h1>Power that keeps<br />life <em>moving.</em></h1>
          <p className="hero-intro">
            Intelligent energy storage built for American homes, businesses,
            and the grid — reliable today, ready for what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solutions">
              Explore solutions <Arrow />
            </a>
            <a className="button button-quiet" href="#company">Meet K2VOLT</a>
          </div>
          <div className="hero-proof">
            <div><strong>3</strong><span>storage platforms</span></div>
            <div><strong>24/7</strong><span>energy visibility</span></div>
            <div><strong>01</strong><span>connected ecosystem</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="K2VOLT modular energy storage system illustration">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="power-core" aria-hidden="true">
            <span className="core-k">K2</span>
            <span className="core-v">VOLT</span>
            <span className="core-status"><i /> SYSTEM ONLINE</span>
            <span className="core-data">98.7%</span>
            <span className="core-label">available capacity</span>
          </div>
          <div className="battery battery-back" aria-hidden="true" />
          <div className="battery battery-mid" aria-hidden="true" />
          <div className="battery battery-front" aria-hidden="true">
            <span className="battery-logo">K2</span>
            <span className="battery-light" />
            <span className="battery-panel" />
          </div>
          <div className="energy-chip" aria-hidden="true">
            <span>LIVE OUTPUT</span><strong>12.8 kW</strong>
          </div>
        </div>

        <a className="scroll-cue" href="#solutions"><span /> Discover our systems</a>
      </section>

      <section className="intro-section" id="solutions">
        <div className="section-shell intro-grid">
          <div>
            <p className="section-kicker">One connected ecosystem</p>
            <h2>Energy independence,<br />at every scale.</h2>
          </div>
          <div className="intro-copy">
            <p>
              From a single home to a utility-scale site, K2VOLT brings storage,
              software, and service into one intelligent energy platform.
            </p>
            <a className="text-link" href="#platform">Explore the platform <Arrow /></a>
          </div>
        </div>

        <div className="section-shell solution-grid">
          <article className="solution-card solution-home">
            <div className="card-topline"><span>01</span><span>Residential</span></div>
            <div className="product-stage" aria-hidden="true">
              <div className="home-unit home-unit-back"><i /></div>
              <div className="home-unit home-unit-front"><strong>K2</strong><i /></div>
              <div className="stage-halo" />
            </div>
            <div className="solution-copy">
              <h3>K2 Home</h3>
              <p>Quiet, intelligent backup that helps your home use more of the energy it makes.</p>
              <ul><li>Whole-home resilience</li><li>Solar optimization</li></ul>
            </div>
            <a href="#contact" aria-label="Learn about K2 Home"><Arrow /></a>
          </article>

          <article className="solution-card solution-business">
            <div className="card-topline"><span>02</span><span>Commercial &amp; Industrial</span></div>
            <div className="product-stage" aria-hidden="true">
              <div className="business-unit business-unit-one"><strong>K2</strong><i /></div>
              <div className="business-unit business-unit-two"><strong>K2</strong><i /></div>
              <div className="business-unit business-unit-three"><strong>K2</strong><i /></div>
              <div className="stage-halo" />
            </div>
            <div className="solution-copy">
              <h3>K2 Business</h3>
              <p>Flexible energy storage for facilities that need lower peaks and dependable continuity.</p>
              <ul><li>Demand management</li><li>Operational backup</li></ul>
            </div>
            <a href="#contact" aria-label="Learn about K2 Business"><Arrow /></a>
          </article>

          <article className="solution-card solution-grid-scale">
            <div className="card-topline"><span>03</span><span>Utility Scale</span></div>
            <div className="product-stage" aria-hidden="true">
              <div className="grid-yard">
                <i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="stage-halo" />
            </div>
            <div className="solution-copy">
              <h3>K2 Grid</h3>
              <p>Modular, grid-ready storage engineered to support renewable energy and network stability.</p>
              <ul><li>Renewable integration</li><li>Grid services</li></ul>
            </div>
            <a href="#contact" aria-label="Learn about K2 Grid"><Arrow /></a>
          </article>
        </div>
      </section>

      <section className="platform-section" id="platform">
        <div className="platform-orb" aria-hidden="true" />
        <div className="section-shell platform-grid">
          <div className="platform-copy">
            <p className="section-kicker section-kicker-dark">K2 Intelligence</p>
            <h2>Every electron.<br /><em>Working smarter.</em></h2>
            <p className="platform-intro">
              One clear operating layer connects every K2VOLT system — giving
              owners and operators the insight to make energy work harder.
            </p>
            <div className="feature-list">
              <div><span>01</span><p><strong>See the full picture</strong>Track energy flow, system health, and performance in real time.</p></div>
              <div><span>02</span><p><strong>Act automatically</strong>Optimize around usage, tariffs, and operational priorities.</p></div>
              <div><span>03</span><p><strong>Scale with confidence</strong>Manage one asset or a portfolio through the same connected experience.</p></div>
            </div>
          </div>

          <div className="dashboard" aria-label="K2 Intelligence energy management dashboard illustration">
            <div className="dashboard-head">
              <strong>K2<span>VOLT</span></strong>
              <div><i /><i /><i /></div>
            </div>
            <div className="dashboard-body">
              <aside>
                <span className="active" /><span /><span /><span /><span />
              </aside>
              <div className="dashboard-main">
                <div className="dash-label"><span>Portfolio overview</span><i>LIVE</i></div>
                <div className="dash-metrics">
                  <div><span>Available</span><strong>98.7<small>%</small></strong></div>
                  <div><span>Active power</span><strong>2.48<small>MW</small></strong></div>
                  <div><span>Energy today</span><strong>18.6<small>MWh</small></strong></div>
                </div>
                <div className="dash-chart">
                  <div className="chart-lines"><i /><i /><i /><i /></div>
                  <div className="chart-fill" />
                  <div className="chart-path" />
                  <span className="chart-dot" />
                </div>
                <div className="dash-bottom">
                  <div className="energy-ring"><span>74%</span></div>
                  <div className="bar-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                  <div className="site-status"><span>Site status</span><strong><i /> All systems normal</strong><small>12 assets connected</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="section-shell company-grid">
          <div className="company-statement">
            <p className="section-kicker">American energy, reimagined</p>
            <h2>Built with an<br />independent spirit.</h2>
          </div>
          <div className="company-copy">
            <p className="company-lead">
              K2VOLT is a 100% U.S.-owned energy technology company focused on
              making clean, resilient power practical at every scale.
            </p>
            <p>
              We pair thoughtful hardware with connected intelligence to help
              families, businesses, and energy operators take control of when
              and how power is used.
            </p>
          </div>
        </div>
        <div className="section-shell values-row">
          <article><span>01</span><h3>Designed for reality</h3><p>Systems shaped around the way American homes, facilities, and grids actually operate.</p></article>
          <article><span>02</span><h3>Intelligence included</h3><p>Software and controls designed as part of the system, never added as an afterthought.</p></article>
          <article><span>03</span><h3>Ready to grow</h3><p>A modular foundation that expands as energy needs and opportunities evolve.</p></article>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell process-head">
          <p className="section-kicker">From ambition to operation</p>
          <h2>A clearer path to<br />stored energy.</h2>
          <p>We work with partners and customers to shape the right system for the right application.</p>
        </div>
        <div className="section-shell process-track">
          <div><span>01</span><i /><h3>Understand</h3><p>Define the load, site priorities, and energy goals.</p></div>
          <div><span>02</span><i /><h3>Configure</h3><p>Match the right storage architecture to the opportunity.</p></div>
          <div><span>03</span><i /><h3>Deploy</h3><p>Support a coordinated path from planning to operation.</p></div>
          <div><span>04</span><i /><h3>Optimize</h3><p>Use connected intelligence to improve performance over time.</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="section-shell contact-inner">
          <p className="section-kicker section-kicker-dark">Your energy, your advantage</p>
          <h2>Let&apos;s build what<br />powers next.</h2>
          <p>Tell us about your home, facility, or energy project. We&apos;ll help you find the right place to start.</p>
          <a className="button contact-button" href="mailto:hello@k2volt.com?subject=K2VOLT%20Energy%20Storage%20Project">
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">K2</span><span>VOLT</span>
            <p>Energy storage for a smarter future.</p>
          </div>
          <div><strong>Solutions</strong><a href="#solutions">Residential</a><a href="#solutions">Commercial &amp; Industrial</a><a href="#solutions">Utility Scale</a></div>
          <div><strong>Company</strong><a href="#platform">Technology</a><a href="#company">About K2VOLT</a><a href="#contact">Contact</a></div>
          <div className="footer-status"><span><i /> American-owned</span><span>© 2026 K2VOLT</span></div>
        </div>
      </footer>
    </main>
  );
}
