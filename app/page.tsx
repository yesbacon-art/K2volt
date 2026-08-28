const Arrow = () => <span aria-hidden="true">↗</span>;
const BrandMark = () => (
  <span className="brand-mark" aria-label="K2VOLT">
    <strong>K2</strong>
    <small>VOLT</small>
  </span>
);

const solutions = [
  {
    number: '01',
    category: 'Residential',
    name: 'K2 Home',
    image: '/images/k2volt-residential.png',
    alt: 'K2VOLT residential battery installed beside a solar-powered American home',
    description:
      'Quiet, intelligent backup that helps homes use more solar energy and stay ready through outages.',
    features: ['Whole-home resilience', 'Solar optimization'],
  },
  {
    number: '02',
    category: 'Commercial & Industrial',
    name: 'K2 Business',
    image: '/images/k2volt-commercial.png',
    alt: 'K2VOLT commercial battery cabinets at a modern American facility',
    description:
      'Flexible storage for facilities that need lower peak costs, continuity, and a smarter energy strategy.',
    features: ['Demand management', 'Operational backup'],
  },
  {
    number: '03',
    category: 'Utility Scale',
    name: 'K2 Grid',
    image: '/images/k2volt-utility.png',
    alt: 'K2VOLT utility-scale battery storage site with solar, wind, and grid infrastructure',
    description:
      'Modular, grid-ready systems that support renewable integration, capacity, and network stability.',
    features: ['Renewable integration', 'Grid services'],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="K2VOLT home">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#heritage">Heritage</a>
          <a href="#platform">Technology</a>
          <a href="#company">Company</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Start a project <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-media"
          src="/images/k2volt-utility.png"
          alt="Large K2VOLT energy storage project connected to renewable generation"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> A K2 Energy brand · Battery innovation since 2006
          </p>
          <h1>
            Proven battery DNA.
            <br />
            Built for <em>what&apos;s next.</em>
          </h1>
          <p className="hero-intro">
            K2VOLT brings two decades of K2 Energy cell, pack, and system
            experience into intelligent storage for American homes,
            businesses, and the grid.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solutions">
              Explore solutions <Arrow />
            </a>
            <a className="button button-quiet" href="#heritage">
              Our battery heritage
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>20 years</strong>
              <span>battery experience</span>
            </div>
            <div>
              <strong>3</strong>
              <span>storage platforms</span>
            </div>
            <div>
              <strong>01</strong>
              <span>connected ecosystem</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#solutions">
          <span /> Discover K2VOLT
        </a>
      </section>

      <section className="intro-section" id="solutions">
        <div className="section-shell intro-grid">
          <div>
            <p className="section-kicker">Storage for every scale</p>
            <h2>
              Energy independence,
              <br />
              from home to grid.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              One battery heritage. Three purpose-built storage platforms.
              K2VOLT combines dependable hardware, intelligent controls, and
              service into a unified energy ecosystem.
            </p>
            <a className="text-link" href="#platform">
              Explore K2 Intelligence <Arrow />
            </a>
          </div>
        </div>

        <div className="section-shell solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.name}>
              <div className="card-topline">
                <span>{solution.number}</span>
                <span>{solution.category}</span>
              </div>
              <figure className="solution-image">
                <img src={solution.image} alt={solution.alt} />
              </figure>
              <div className="solution-copy">
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" aria-label={`Talk to K2VOLT about ${solution.name}`}>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="heritage-section" id="heritage">
        <div className="section-shell heritage-grid">
          <div className="heritage-visual">
            <div className="heritage-year">
              <strong>2006</strong>
              <span>Founded in Nevada</span>
            </div>
            <img
              src="/images/k2-energy-legacy-cell.png"
              alt="K2 Energy lithium iron phosphate battery from the company's product heritage"
            />
            <small>From cells and packs to complete energy systems</small>
          </div>
          <div className="heritage-copy">
            <img
              className="parent-logo"
              src="/images/k2-energy-logo.png"
              alt="K2 Energy"
            />
            <p className="section-kicker section-kicker-dark">
              Two decades of battery engineering
            </p>
            <h2>
              K2VOLT is a new chapter
              <br />
              in a proven story.
            </h2>
            <p className="heritage-lead">
              K2 Energy began in Nevada in 2006, developing commercial lithium
              iron phosphate cells and expanding into packs, modules, and
              custom high-performance battery systems.
            </p>
            <p>
              That experience spans demanding medical, industrial, defense,
              aerospace, mobility, and renewable-energy applications. K2VOLT
              carries the same battery-first mindset into connected stationary
              storage.
            </p>
            <a
              className="heritage-link"
              href="https://k2energysolutions.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore K2 Energy <Arrow />
            </a>
          </div>
        </div>

        <div className="section-shell heritage-timeline" aria-label="K2 Energy history">
          <article>
            <time>2006–2007</time>
            <span />
            <h3>Cell innovation begins</h3>
            <p>
              K2 Energy completes early commercial builds of 18650 and 26650
              lithium-ion cells and launches power and energy cell platforms.
            </p>
          </article>
          <article>
            <time>2010–2016</time>
            <span />
            <h3>Systems prove their range</h3>
            <p>
              Programs expand into electric mobility, high-voltage and
              high-current modular systems, marine power, and U.S. Navy SBIR
              development.
            </p>
          </article>
          <article>
            <time>2026</time>
            <span />
            <h3>K2VOLT advances the legacy</h3>
            <p>
              Two decades of battery knowledge become a focused storage brand
              for residential, commercial, industrial, and utility customers.
            </p>
          </article>
        </div>
      </section>

      <section className="platform-section" id="platform">
        <div className="platform-orb" aria-hidden="true" />
        <div className="section-shell platform-grid">
          <div className="platform-copy">
            <p className="section-kicker section-kicker-dark">
              K2 Intelligence
            </p>
            <h2>
              Battery expertise,
              <br />
              <em>system intelligence.</em>
            </h2>
            <p className="platform-intro">
              The K2 story started at the cell. K2VOLT extends it through the
              complete system — from hardware and controls to a clear operating
              layer that helps every asset work harder.
            </p>
            <div className="feature-list">
              <div>
                <span>01</span>
                <p>
                  <strong>See the full picture</strong>
                  Track energy flow, system health, and performance in real
                  time.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Act automatically</strong>
                  Optimize around demand, solar production, tariffs, and
                  operating priorities.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Scale with confidence</strong>
                  Manage one home, one facility, or an entire portfolio through
                  the same connected experience.
                </p>
              </div>
            </div>
          </div>

          <div
            className="dashboard"
            aria-label="K2 Intelligence energy management dashboard"
          >
            <div className="dashboard-head">
              <strong>
                K2<span>VOLT</span>
              </strong>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="dashboard-body">
              <aside>
                <span className="active" />
                <span />
                <span />
                <span />
                <span />
              </aside>
              <div className="dashboard-main">
                <div className="dash-label">
                  <span>Portfolio overview</span>
                  <i>LIVE</i>
                </div>
                <div className="dash-metrics">
                  <div>
                    <span>Available</span>
                    <strong>
                      98.7<small>%</small>
                    </strong>
                  </div>
                  <div>
                    <span>Active power</span>
                    <strong>
                      2.48<small>MW</small>
                    </strong>
                  </div>
                  <div>
                    <span>Energy today</span>
                    <strong>
                      18.6<small>MWh</small>
                    </strong>
                  </div>
                </div>
                <div className="dash-chart">
                  <div className="chart-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="chart-fill" />
                  <div className="chart-path" />
                  <span className="chart-dot" />
                </div>
                <div className="dash-bottom">
                  <div className="energy-ring">
                    <span>74%</span>
                  </div>
                  <div className="bar-chart">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="site-status">
                    <span>Site status</span>
                    <strong>
                      <i /> All systems normal
                    </strong>
                    <small>12 assets connected</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="section-shell company-grid">
          <div className="company-statement">
            <p className="section-kicker">One legacy, a focused mission</p>
            <h2>
              American energy,
              <br />
              ready for more.
            </h2>
          </div>
          <div className="company-copy">
            <p className="company-lead">
              K2VOLT is the stationary energy-storage brand of K2 Energy,
              created to turn two decades of battery experience into dependable
              power at every scale.
            </p>
            <p>
              We connect proven battery thinking with modern energy management
              so families, businesses, and power operators can decide when and
              how their energy works.
            </p>
          </div>
        </div>
        <div className="section-shell values-row">
          <article>
            <span>01</span>
            <h3>Battery-first thinking</h3>
            <p>
              A system philosophy rooted in cell behavior, safety, durability,
              and real-world performance.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Intelligence included</h3>
            <p>
              Controls and software designed as part of the storage system,
              never added as an afterthought.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Built to keep growing</h3>
            <p>
              A modular foundation that expands as energy needs and
              opportunities evolve.
            </p>
          </article>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell process-head">
          <p className="section-kicker">From ambition to operation</p>
          <h2>
            A clearer path to
            <br />
            stored energy.
          </h2>
          <p>
            We work with partners and customers to shape the right system for
            the right application.
          </p>
        </div>
        <div className="section-shell process-track">
          <div>
            <span>01</span>
            <i />
            <h3>Understand</h3>
            <p>Define the load, site priorities, and energy goals.</p>
          </div>
          <div>
            <span>02</span>
            <i />
            <h3>Configure</h3>
            <p>Match the right storage architecture to the opportunity.</p>
          </div>
          <div>
            <span>03</span>
            <i />
            <h3>Deploy</h3>
            <p>Support a coordinated path from planning to operation.</p>
          </div>
          <div>
            <span>04</span>
            <i />
            <h3>Optimize</h3>
            <p>Use connected intelligence to improve performance over time.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="section-shell contact-inner">
          <p className="section-kicker section-kicker-dark">
            Twenty years behind every conversation
          </p>
          <h2>
            Let&apos;s build what
            <br />
            powers next.
          </h2>
          <p>
            Tell us about your home, facility, or energy project. We&apos;ll
            help you find the right place to start.
          </p>
          <a
            className="button contact-button"
            href="mailto:hello@k2volt.com?subject=K2VOLT%20Energy%20Storage%20Project"
          >
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <p>A K2 Energy brand. Energy storage for a smarter future.</p>
          </div>
          <div>
            <strong>Solutions</strong>
            <a href="#solutions">Residential</a>
            <a href="#solutions">Commercial &amp; Industrial</a>
            <a href="#solutions">Utility Scale</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#heritage">K2 Heritage</a>
            <a href="#platform">Technology</a>
            <a href="#company">About K2VOLT</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-status">
            <span>
              <i /> Battery innovation since 2006
            </span>
            <span>© 2026 K2VOLT · A K2 Energy brand</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
