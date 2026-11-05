import { useMemo, useState } from "react";
import WhyOffshoreTeam from "./WhyOffshoreTeam";
import "./App.css";

const developers = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    level: "Senior",
    skills: ["React", "Node.js", "MongoDB"],
    initials: "AS",
    color: "blue",
    experience: "5+ years",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    level: "Mid-level",
    skills: ["React", "JavaScript", "CSS"],
    initials: "PV",
    color: "pink",
    experience: "3+ years",
  },
  {
    name: "Rohan Patel",
    role: "Backend Developer",
    level: "Senior",
    skills: ["Java", "Spring Boot", "SQL"],
    initials: "RP",
    color: "green",
    experience: "6+ years",
  },
  {
    name: "Ananya Gupta",
    role: "AI / ML Engineer",
    level: "Mid-level",
    skills: ["Python", "AI / ML", "SQL"],
    initials: "AG",
    color: "purple",
    experience: "3+ years",
  },
  {
    name: "Kabir Singh",
    role: "Mobile Developer",
    level: "Mid-level",
    skills: ["Flutter", "React Native", "JavaScript"],
    initials: "KS",
    color: "orange",
    experience: "4+ years",
  },
  {
    name: "Meera Joshi",
    role: "Cloud & DevOps Engineer",
    level: "Senior",
    skills: ["AWS", "Docker", "CI/CD"],
    initials: "MJ",
    color: "teal",
    experience: "5+ years",
  },
];

const services = [
  {
    icon: "⌘",
    title: "Web Development",
    desc: "Modern web applications built for performance, usability and scale.",
  },
  {
    icon: "✳",
    title: "AI & Machine Learning",
    desc: "Explore AI-powered products, automation and intelligent workflows.",
  },
  {
    icon: "▣",
    title: "Mobile Development",
    desc: "Build engaging mobile experiences for Android and iOS.",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    desc: "Reliable infrastructure, deployment pipelines and cloud solutions.",
  },
];

const skills = [
  "All skills",
  "React",
  "Node.js",
  "Java",
  "Python",
  "AI / ML",
  "AWS",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All skills");
  const [activeNav, setActiveNav] = useState("Home");
  const [contactSent, setContactSent] = useState(false);

  const filteredDevelopers = useMemo(() => {
    const term = search.toLowerCase().trim();
    return developers.filter((dev) => {
      const matchesSearch =
        !term ||
        dev.name.toLowerCase().includes(term) ||
        dev.role.toLowerCase().includes(term) ||
        dev.skills.some((s) => s.toLowerCase().includes(term));

      const matchesSkill = skill === "All skills" || dev.skills.includes(skill);

      return matchesSearch && matchesSkill;
    });
  }, [search, skill]);

  function navigate(name) {
    setActiveNav(name);
    setMenuOpen(false);

    const sectionIds = {
      Home: "home",
      Developers: "developers",
      Services: "services",
      "Why Offshore Team": "why-offshore",
      About: "about",
      Contact: "contact",
    };

    document.getElementById(sectionIds[name])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function submitContact(event) {
    event.preventDefault();
    setContactSent(true);
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot"></span>
        Your next great developer is closer than you think.
        <a href="#developers">
          Explore developers <span>↗</span>
        </a>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={() => setActiveNav("Home")}>
          <span className="brand-mark">
            D<span>.</span>
          </span>
          <span className="brand-text">
            developers<span>bench</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "Home",
            "Developers",
            "Services",
            "Why Offshore Team",
            "About",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              className={activeNav === item ? "nav-link active" : "nav-link"}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#contact">
          Hire a Developer <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-icon">✦</span> THE ADRS DEVELOPER NETWORK
            </div>
            <h1>
              Build your next big idea with{" "}
              <span className="gradient-text">the right talent.</span>
            </h1>
            <p className="hero-description">
              Meet skilled developers, discover the right expertise, and bring
              your next digital product to life with Developers Bench.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#developers">
                Explore Developers <span>→</span>
              </a>
              <a className="button button-light" href="#services">
                <span className="play-icon">▶</span> Explore our services
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span className="mini-avatar av-one">A</span>
                <span className="mini-avatar av-two">P</span>
                <span className="mini-avatar av-three">R</span>
                <span className="mini-avatar av-four">M</span>
              </div>
              <div>
                <strong>Technology talent, all in one place</strong>
                <small>Find skills that fit your next project</small>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-glow"></div>
            <div className="floating-tag tag-top">
              <span className="tag-check">✓</span> Vetted talent
            </div>
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>your-next-project.jsx</span>
                <span className="window-menu">•••</span>
              </div>
              <div className="code-body">
                <div className="code-line">
                  <span className="line-num">01</span>
                  <span>
                    <b className="code-purple">const</b>{" "}
                    <b className="code-blue">project</b> = {"{"}
                  </span>
                </div>
                <div className="code-line indent">
                  <span className="line-num">02</span>
                  <span>
                    idea: <b className="code-green">"Something amazing"</b>,
                  </span>
                </div>
                <div className="code-line indent">
                  <span className="line-num">03</span>
                  <span>
                    team: <b className="code-green">"The right people"</b>,
                  </span>
                </div>
                <div className="code-line indent">
                  <span className="line-num">04</span>
                  <span>
                    future: <b className="code-orange">"Unlimited"</b>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">05</span>
                  <span>{"}"};</span>
                </div>
                <div className="code-line gap-line">
                  <span className="line-num">06</span>
                  <span>
                    <b className="code-purple">await</b> build(project);{" "}
                    <span className="cursor"></span>
                  </span>
                </div>
              </div>
              <div className="code-footer">
                <span>
                  <i></i> Ready to build
                </span>
                <span>JavaScript · UTF-8</span>
              </div>
            </div>
            <div className="floating-card talent-card">
              <div className="talent-icon">{"</>"}</div>
              <div>
                <strong>Developer matched</strong>
                <small>Skills aligned with your goals</small>
              </div>
              <span className="match-badge">98%</span>
            </div>
            <div className="floating-tag tag-bottom">✦ Ideas into impact</div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="stat-item">
            <strong>
              01<span>+</span>
            </strong>
            <span>Find the right expertise</span>
          </div>
          <div className="stat-item">
            <strong>02</strong>
            <span>Build with confidence</span>
          </div>
          <div className="stat-item">
            <strong>03</strong>
            <span>Scale as you grow</span>
          </div>
          <div className="stat-note">
            <span className="stat-note-icon">✦</span>
            <span>
              Great products start with
              <br />
              <b>great people.</b>
            </span>
          </div>
        </section>

        <section className="section-wrap developers-section" id="developers">
          <div className="section-heading">
            <div>
              <div className="eyebrow">MEET YOUR NEXT TEAMMATE</div>
              <h2>
                Talent that moves
                <br />
                your ideas <span className="gradient-text">forward.</span>
              </h2>
            </div>
            <p>
              Explore technology expertise for your next project, from frontend
              experiences to cloud infrastructure and AI.
            </p>
          </div>

          <div className="developer-toolbar">
            <div className="search-box">
              <span>⌕</span>
              <input
                aria-label="Search developers"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, role or skill..."
              />
              <kbd>⌘ K</kbd>
            </div>
            <div className="filter-wrap">
              <label htmlFor="skill-filter">Skill</label>
              <select
                id="skill-filter"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              >
                {skills.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="developer-grid">
            {filteredDevelopers.map((dev) => (
              <article className="developer-card" key={dev.name}>
                <div className="developer-card-top">
                  <span className="availability">
                    <i></i> Profile preview
                  </span>
                  <button
                    className="more-button"
                    aria-label={`More about ${dev.name}`}
                  >
                    ↗
                  </button>
                </div>
                <div className={`developer-avatar ${dev.color}`}>
                  {dev.initials}
                  <span className="avatar-status"></span>
                </div>
                <h3>{dev.name}</h3>
                <p className="developer-role">{dev.role}</p>
                <div className="developer-meta">
                  <span>{dev.level}</span>
                  <span>{dev.experience}</span>
                </div>
                <div className="skill-list">
                  {dev.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a
                  className="profile-link"
                  href="#contact"
                  onClick={() => setContactSent(false)}
                >
                  Discuss a requirement <span>→</span>
                </a>
              </article>
            ))}
          </div>
          {filteredDevelopers.length === 0 && (
            <div className="empty-state">
              No matching profiles. Try another search or skill.
            </div>
          )}
          <div className="center-action">
            <a className="button button-outline" href="#contact">
              Looking for a specific skill? <span>→</span>
            </a>
          </div>
          <p className="demo-note">
            Demo profiles for layout preview only. Replace with verified ADRS
            developer profiles before publishing.
          </p>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">WHAT WE CAN BUILD TOGETHER</div>
                <h2>
                  Expertise for every
                  <br />
                  stage of <span className="gradient-text">your journey.</span>
                </h2>
              </div>
              <p>
                From the first idea to your next big release, discover the
                capabilities to help your business move forward.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, i) => (
                <article className="service-card" key={service.title}>
                  <div className={`service-icon icon-${i}`}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#contact">
                    Explore capability <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <WhyOffshoreTeam />

        <section className="about-section section-wrap" id="about">
          <div className="about-visual">
            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>
            <div className="about-center">
              <span className="brand-mark">
                D<span>.</span>
              </span>
              <strong>
                Developers
                <br />
                Bench
              </strong>
              <small>by ADRS Techno</small>
            </div>
            <div className="orbit-node node-one">{"</>"}</div>
            <div className="orbit-node node-two">✳</div>
            <div className="orbit-node node-three">☁</div>
            <div className="orbit-node node-four">✦</div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">A NETWORK BUILT FOR BUILDERS</div>
            <h2>
              More than a list of skills.{" "}
              <span className="gradient-text">A better way to build.</span>
            </h2>
            <p>
              Developers Bench is designed to help businesses discover technical
              talent and explore development capabilities backed by ADRS Techno.
            </p>
            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Find relevant expertise</strong>
                <p>Search by skills and areas of development.</p>
              </div>
            </div>
            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Start a clear conversation</strong>
                <p>Share your needs and discuss the right approach.</p>
              </div>
            </div>
            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Build for what comes next</strong>
                <p>Explore technology options that can grow with your goals.</p>
              </div>
            </div>
            <a className="button button-primary" href="#contact">
              Talk to our team <span>→</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-wrap section-wrap">
            <div className="contact-copy">
              <div className="eyebrow light-eyebrow">
                LET'S BUILD SOMETHING GREAT
              </div>
              <h2>
                Have a project
                <br />
                in mind? <span>Let's talk.</span>
              </h2>
              <p>
                Tell us what you want to build. Start a conversation about your
                requirements and the skills your project needs.
              </p>
              <div className="contact-detail">
                <span>✉</span>
                <div>
                  <small>Email our team</small>
                  <a href="mailto:support@adrstechno.com">
                    support@adrstechno.com
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <span>↗</span>
                <div>
                  <small>Visit ADRS Techno</small>
                  <a
                    href="https://adrstechno.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    adrstechno.com
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <h3>Tell us about your project</h3>
              <p>Fill in your details to prepare your enquiry.</p>
              <label>
                Your name
                <input required name="name" placeholder="Enter your name" />
              </label>
              <label>
                Work email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </label>
              <label>
                What do you need?
                <select name="requirement" defaultValue="">
                  <option value="" disabled>
                    Select a requirement
                  </option>
                  <option>Hire a developer</option>
                  <option>Build a web application</option>
                  <option>AI / ML solution</option>
                  <option>Mobile application</option>
                  <option>Other project</option>
                </select>
              </label>
              <label>
                Project details
                <textarea
                  required
                  name="details"
                  rows="3"
                  placeholder="Tell us a little about your idea..."
                ></textarea>
              </label>
              <button
                className="button button-primary submit-button"
                type="submit"
              >
                Prepare enquiry <span>→</span>
              </button>
              {contactSent && (
                <p className="form-success">
                  Your details are ready, but this demo form does not send data.
                  Email support@adrstechno.com to submit your enquiry.
                </p>
              )}
              <small className="form-privacy">
                This demo form does not store or transmit your information.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              D<span>.</span>
            </span>
            <span className="brand-text">
              developers<span>bench</span>
            </span>
          </a>
          <p>
            Connecting ideas with the people
            <br />
            who know how to build them.
          </p>
          <div className="footer-links">
            <a href="#developers">Developers</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Developers Bench · ADRS Techno
          </span>
          <a href="https://adrstechno.com/" target="_blank" rel="noreferrer">
            ADRS Techno website ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
