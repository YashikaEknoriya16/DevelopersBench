import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TopDevelopers from "./TopDevelopers";
import AvailableDevelopers from "./AvailableDevelopers.jsx";
import ClientFeedback from "./ClientFeedback";
import TeamPackages from "./TeamPackages";
import {
  MonitorSmartphone,
  BrainCircuit,
  SmartphoneNfc,
  CloudCog,
} from "lucide-react";
import SetupProcess from "./SetupProcess";
import HiringProcess from "./HiringProcess";
import TrackRecord from "./TrackRecord";
import WhyOffshoreTeam from "./WhyOffshoreTeam";

const developers = [
  {
    name: "Siddhant Dubey",
    role: "Full Stack Developer",
    initials: "SD",
    color: "blue",
  },
  {
    name: "Sparsh Sahu",
    role: "Java Full Stack Developer",
    initials: "SS",
    color: "pink",
  },
  {
    name: "Danish Khan",
    role: "Full Stack Developer",
    initials: "DK",
    color: "green",
  },
  {
    name: "Ishant Patel",
    role: "Full Stack Developer",
    initials: "IP",
    color: "purple",
  },
  {
    name: "Aman Vishwakarma",
    role: "Full Stack Developer",
    initials: "AV",
    color: "orange",
  },
  {
    name: "Ayush Kachhi",
    role: "Python & ERPNext Developer",
    initials: "AK",
    color: "teal",
  },
  {
    name: "Nishant Kushwaha",
    role: "Full Stack Developer Intern",
    initials: "NK",
    color: "blue",
  },
  {
    name: "Shivanshu Nigam",
    role: "MERN Developer Intern",
    initials: "SN",
    color: "pink",
  },
];

const services = [
  {
    icon: <MonitorSmartphone size={34} strokeWidth={1.7} />,
    title: "Web Development",
    desc: "Modern, responsive and high-performance websites designed to grow your business.",
  },
  {
    icon: <BrainCircuit size={34} strokeWidth={1.7} />,
    title: "AI & Machine Learning",
    desc: "Smart AI solutions, intelligent automation and next-generation digital experiences.",
  },
  {
    icon: <SmartphoneNfc size={34} strokeWidth={1.7} />,
    title: "Mobile Development",
    desc: "Powerful Android and iOS applications with seamless user experiences.",
  },
  {
    icon: <CloudCog size={34} strokeWidth={1.7} />,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure, seamless deployment and reliable operations.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Home");
  const [contactSent, setContactSent] = useState(false);
  const [showTopDevelopers, setShowTopDevelopers] = useState(false);

  // Dark / Light Mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("adrs-theme") || "light";
  });

  const filteredDevelopers = useMemo(() => {
    const term = search.toLowerCase().trim();

    return developers.filter((dev) => {
      return (
        !term ||
        dev.name.toLowerCase().includes(term) ||
        dev.role.toLowerCase().includes(term)
      );
    });
  }, [search]);

  // Scroll Reveal Animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".stats-strip, .developers-section, .services-section, .about-section, .contact-section",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.classList.add("reveal-element");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Apply selected theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("adrs-theme", theme);
  }, [theme]);
  // Refresh par page top position se start hoga
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  // Toggle theme
  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }
  function navigate(name) {
    setActiveNav(name);
    setMenuOpen(false);
    const sectionIds = {
      Home: "home",
      "Top Developers": "top-developers",
      Services: "services",
      "Setup Process": "setup-process",
      "Why Offshore Team": "why-offshore",
      "why Offshore Team": "why-offshore",
      About: "about",
      Contact: "contact",
    };

    const targetId = sectionIds[name];
    const target = document.getElementById(targetId);

    console.log("Clicked:", name);
    console.log("Target ID:", targetId);
    console.log("Target element:", target);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  function handleNavigation(item) {
    navigate(item);
  }

  function goBackHome() {
    setShowTopDevelopers(false);
    setActiveNav("Home");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function submitContact(event) {
    event.preventDefault();
    setContactSent(true);
  }

  // Separate Top Developers Page
  // if (showTopDevelopers) {
  //   return <TopDevelopers onBack={goBackHome} />;
  // }

  return (
    <div className="site-shell">
      {/* Announcement */}
      <div className="announcement">
        <span className="announcement-dot"></span>
        Your next great developer is closer than you think.
        <a href="#developers">
          Explore developers <span>↗</span>
        </a>
      </div>
      {/* Header */}

      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={() => {
            setShowTopDevelopers(false);
            setActiveNav("Home");
          }}
        >
          <img src="/adrs-logo.png" alt="ADRS Logo" className="adrs-logo" />

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
            "Top Developers",
            "Services",
            "Setup Process",
            "why Offshore Team",
            "About",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              className={activeNav === item ? "nav-link active" : "nav-link"}
              onClick={() => handleNavigation(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Dark / Light Mode Button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
          title={
            theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
          }
        >
          {theme === "light" ? "☾" : "☀"}
        </button>

        <a className="button button-primary header-cta" href="#contact">
          Hire a Developer <span>↗</span>
        </a>
      </header>
      <main>
        {showTopDevelopers ? (
          <TopDevelopers onBack={goBackHome} />
        ) : (
          <>
            {/* Hero */}
            <section className="hero section-wrap" id="home">
              <div className="hero-copy">
                <div className="eyebrow">
                  <span className="eyebrow-icon">✦</span>
                  THE ADRS DEVELOPER NETWORK
                </div>

                <h1>
                  Build your next big idea with{" "}
                  <span className="gradient-text">the right talent.</span>
                </h1>

                <p className="hero-description">
                  Meet skilled developers, discover the right expertise, and
                  bring your next digital product to life with Developers Bench.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#developers">
                    Explore Developers <span>→</span>
                  </a>

                  <a className="button button-light" href="#services">
                    <span className="play-icon">▶</span>
                    Explore our services
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

                <div className="floating-tag tag-bottom">
                  ✦ Ideas into impact
                </div>
              </div>
            </section>

            <AvailableDevelopers />

            {/* Stats */}
            <section className="top-developers-section">
              <div className="top-developers-heading">
                <span>OUR EXPERTISE</span>
                <h2>Meet Our Top Developers</h2>
                <p>
                  Explore experienced developers with the skills and expertise
                  to turn your ideas into reality.
                </p>
              </div>

              <div className="top-developers-stats">
                <div className="top-developer-card">
                  <h3>9+</h3>
                  <p>Top Developers</p>
                </div>

                <div className="top-developer-card">
                  <h3>4.7/5</h3>
                  <p>Average Rating</p>
                </div>

                <div className="top-developer-card">
                  <h3>161+</h3>
                  <p>Total Reviews</p>
                </div>

                <div className="top-developer-card">
                  <h3>4yr+</h3>
                  <p>Experience</p>
                </div>
              </div>
            </section>

            {/* Developers */}
            <section
              className="section-wrap developers-section"
              id="top-developers"
            >
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
                  Explore technology expertise for your next project, from
                  frontend experiences to cloud infrastructure and AI.
                </p>
              </div>

              <div className="developer-toolbar">
                <div className="search-box">
                  <span>⌕</span>

                  <input
                    aria-label="Search developers"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or role..."
                  />

                  <kbd>⌘ K</kbd>
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
                      <span>ADRS Developer</span>
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
                  No matching profiles. Try another search.
                </div>
              )}
              <div className="center-action">
                <a
                  className="button button-outline"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTopDevelopers(true);
                    setActiveNav("Top Developers");
                  }}
                >
                  Looking for a specific skill? <span>→</span>
                </a>
              </div>
            </section>

            {/* Services */}
            <section className="services-section" id="services">
              <div className="section-wrap">
                <div className="section-heading">
                  <div>
                    <div className="eyebrow">WHAT WE CAN BUILD TOGETHER</div>

                    <h2>
                      Expertise for every
                      <br />
                      stage of{" "}
                      <span className="gradient-text">your journey.</span>
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
                      <div className={`service-icon icon-${i}`}>
                        {service.icon}
                      </div>

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
            <SetupProcess />

            <TeamPackages />
            <HiringProcess />
            <WhyOffshoreTeam />
            <TrackRecord />

            {/* About */}
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
                  Developers Bench is designed to help businesses discover
                  technical talent and explore development capabilities backed
                  by ADRS Techno.
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
                    <p>
                      Explore technology options that can grow with your goals.
                    </p>
                  </div>
                </div>

                <a className="button button-primary" href="#contact">
                  Talk to our team <span>→</span>
                </a>
              </div>
            </section>

            {/* Contact */}
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
                    Tell us what you want to build. Start a conversation about
                    your requirements and the skills your project needs.
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
                      Your details are ready, but this demo form does not send
                      data. Email support@adrstechno.com to submit your enquiry.
                    </p>
                  )}

                  <small className="form-privacy">
                    This demo form does not store or transmit your information.
                  </small>
                </form>
              </div>
            </section>
          </>
        )}
      </main>
      {!showTopDevelopers && <ClientFeedback />}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          {/* Company Logo & Description */}
          <div className="footer-company">
            <a className="footer-brand" href="#home">
              <img
                src="/adrs-logo.png"
                alt="ADRS Techno Logo"
                className="footer-logo"
              />
            </a>

            <p>
              Connecting ideas with the people
              <br />
              who know how to build them.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#top-developers">Top Developers</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#services">Web Development</a>
            <a href="#services">AI & Machine Learning</a>
            <a href="#services">Mobile Development</a>
            <a href="#services">Cloud & DevOps</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <p>Have a project in mind?</p>
            <a href="mailto:support@adrstechno.com">support@adrstechno.com</a>
            <a
              href="https://www.adrstechno.com/"
              target="_blank"
              rel="noreferrer"
            >
              ADRS Techno Website ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} ADRS Techno. All rights reserved.
          </span>
          <span>Built for better digital experiences.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
