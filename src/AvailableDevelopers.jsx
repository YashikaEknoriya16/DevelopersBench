import { useEffect, useState } from "react";
import "./styles/AvailableDevelopers.css";

const developers = [
  {
    name: "Siddhant Dubey",
    role: "Full Stack Developer",
    skills: ["Full Stack", "MERN", "PHP"],
    experience: "3 Years",
    initials: "SD",
  },
  {
    name: "Kunal Bhargava",
    role: "Senior Shopify Developer",
    skills: ["Shopify", "Liquid", "React"],
    experience: "2 Years",
    initials: "KB",
  },
  {
    name: "Dhruv Ranadive",
    role: "Senior React Developer",
    skills: ["React", "TypeScript", "Redux Toolkit"],
    experience: "1.5 Years",
    initials: "DR",
  },
];

// Counter Animation
function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function AvailableDevelopers() {
  return (
    <section className="home-available-section" id="top-developers">
      {/* Stats Cards */}
      <div className="home-stats-grid">
        <div className="home-stat-card">
          <h3>
            <CountUp end={161} />
          </h3>
          <p>Verified Developers</p>
        </div>

        <div className="home-stat-card">
          <h3>
            <CountUp end={40} suffix="+" />
          </h3>
          <p>Tech Stack</p>
        </div>

        <div className="home-stat-card">
          <h3>
            <CountUp end={5} suffix="+" />
          </h3>
          <p>Years Experience</p>
        </div>
      </div>

      {/* Available Developers Heading */}
      <div className="home-available-heading">
        <span>OUR TALENT NETWORK</span>
        <h2>Top Developers</h2>
        <p>
          Discover skilled developers who can help bring your next project to
          life.
        </p>
      </div>

      {/* Developer Profiles */}
      <div className="home-available-grid">
        {developers.map((developer) => (
          <article className="home-developer-card" key={developer.name}>
            <div className="home-developer-top">
              <div className="home-developer-avatar">{developer.initials}</div>
              <span className="home-developer-status">Demo Profile</span>
            </div>

            <h3>{developer.name}</h3>
            <p className="home-developer-role">{developer.role}</p>

            <div className="home-developer-skills">
              {developer.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="home-developer-footer">
              <span>Experience</span>
              <strong>{developer.experience}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AvailableDevelopers;
