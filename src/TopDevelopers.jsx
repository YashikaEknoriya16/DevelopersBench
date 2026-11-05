import { useState, useEffect, useRef } from "react";
import { Landmark, Building2, Castle } from "lucide-react";
import "./styles/TopDevelopers.css";
import developers from "./data/developers";

function TopDevelopers({ onBack }) {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Counter states
  const [counts, setCounts] = useState({
    developers: 0,
    technologies: 0,
    passionate: 0,
  });

  const animationRef = useRef(null);

  const allSkills = [
    "All",
    ...new Set(developers.flatMap((developer) => developer.skills)),
  ];

  const technologyCount = allSkills.length - 1;

  // Counter animation on hover
  const startCounter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setCounts({
      developers: 0,
      technologies: 0,
      passionate: 0,
    });

    const duration = 2000;
    const startTime = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        developers: Math.round(developers.length * easedProgress),
        technologies: Math.round(technologyCount * easedProgress),
        passionate: Math.round(100 * easedProgress),
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCounts({
          developers: developers.length,
          technologies: technologyCount,
          passionate: 100,
        });

        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Cleanup animation
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Search and filter
  const filteredDevelopers = developers.filter((developer) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      developer.name.toLowerCase().includes(searchText) ||
      developer.role.toLowerCase().includes(searchText) ||
      developer.skills.some((skill) =>
        skill.toLowerCase().includes(searchText),
      );

    const matchesSkill =
      selectedSkill === "All" || developer.skills.includes(selectedSkill);

    return matchesSearch && matchesSkill;
  });

  // Pagination
  const developersPerPage = 8;
  const totalPages = Math.ceil(filteredDevelopers.length / developersPerPage);

  const startIndex = (currentPage - 1) * developersPerPage;

  const currentDevelopers = filteredDevelopers.slice(
    startIndex,
    startIndex + developersPerPage,
  );

  return (
    <div className="developers-page">
      <header className="developers-header">
        <div className="developers-logo">
          <img
            src="/adrs-logo.png"
            alt="ADRS Technologies Logo"
            className="logo-icon"
          />

          <span>
            Developers<span className="logo-highlight">Bench</span>
          </span>
        </div>

        <button className="back-home-btn" onClick={onBack}>
          ← Back to Home
        </button>
      </header>

      <main className="developers-container">
        <section className="developers-hero">
          <span className="hero-label">OUR DEVELOPER COMMUNITY</span>

          <h1>
            Meet Our <span>Top Developers</span>
          </h1>

          <p>
            Find skilled developers, explore their expertise and connect with
            the right talent for your next project.
          </p>
        </section>

        {/* Animated Statistics */}
        <section className="developer-stats" onMouseEnter={startCounter}>
          <div className="stat-box">
            <h2>{counts.developers}+</h2>
            <p>Developers</p>
          </div>

          <div className="stat-box">
            <h2>{counts.technologies}+</h2>
            <p>Technologies</p>
          </div>

          <div className="stat-box">
            <h2>{counts.passionate}%</h2>
            <p>Passionate</p>
          </div>
        </section>

        <section className="developer-directory">
          <div className="directory-heading">
            <div>
              <h2>Developer Directory</h2>
              <p>Browse and connect with our developers.</p>
            </div>
          </div>

          <div className="developer-filters">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search by name, role or skill..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <select
              value={selectedSkill}
              onChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentPage(1);
              }}
            >
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill === "All" ? "All Technologies" : skill}
                </option>
              ))}
            </select>
          </div>

          <div className="results-count">
            Showing <strong>{filteredDevelopers.length}</strong> of{" "}
            <strong>{developers.length}</strong> developers
          </div>

          {filteredDevelopers.length === 0 ? (
            <div className="no-results">
              <h3>No developers found</h3>
              <p>Try another name or technology.</p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedSkill("All");
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="developers-list">
                {currentDevelopers.map((developer) => {
                  const initials = developer.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <article
                      className="developer-row"
                      key={developer.id || developer.name}
                    >
                      <div className="developer-info">
                        <div className="developer-avatar">
                          {developer.initials || initials}
                        </div>

                        <div>
                          <h3>{developer.name}</h3>
                          <p className="developer-role">{developer.role}</p>
                        </div>
                      </div>

                      <div className="developer-skills">
                        {developer.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>

                      <span className="available-badge">
                        ● {developer.availability || "Available"}
                      </span>

                      <a
                        className="hire-button"
                        href={`mailto:support@adrstechno.com?subject=${encodeURIComponent(
                          `Hiring enquiry for ${developer.name}`,
                        )}&body=${encodeURIComponent(
                          `Hello ADRS Team,\n\nI am interested in connecting with ${developer.name} (${developer.role}).\n\nPlease share more details.\n\nThank you.`,
                        )}`}
                      >
                        Contact Developer →
                      </a>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    ← Previous
                  </button>

                  <div className="pagination-pages">
                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1,
                    ).map((page) => (
                      <button
                        key={page}
                        className={currentPage === page ? "active-page" : ""}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        <section className="developer-cta">
          <h2>Looking for the right developer?</h2>

          <p>
            Explore our developer community and find someone who matches your
            project requirements.
          </p>

          <a href="mailto:support@adrstechno.com">Get in Touch →</a>
        </section>
      </main>

      <section className="branches-section">
        <div className="branches-heading">
          <span>WHERE WE OPERATE</span>
          <h2>Our Branches</h2>
          <p>We're present across multiple cities to serve you better</p>
        </div>

        <div className="branches-grid">
          <div className="branch-card">
            <div className="branch-icon">
              <Landmark size={30} strokeWidth={1.7} />
            </div>

            <h3>Jabalpur</h3>
            <span className="branch-state">MADHYA PRADESH</span>
            <p>Our headquarters with full-service development center</p>
          </div>

          <div className="branch-card">
            <div className="branch-icon">
              <Building2 size={30} strokeWidth={1.7} />
            </div>

            <h3>Bhopal</h3>
            <span className="branch-state">MADHYA PRADESH</span>
            <p>Strategic location serving central India clients</p>
          </div>

          <div className="branch-card">
            <div className="branch-icon">
              <Castle size={30} strokeWidth={1.7} />
            </div>

            <h3>Raipur</h3>
            <span className="branch-state">CHHATTISGARH</span>
            <p>Expanding presence in eastern central region</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopDevelopers;
