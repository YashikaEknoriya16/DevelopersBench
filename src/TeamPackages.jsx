import "./styles/TeamPackages.css";

const packages = [
  {
    name: "Starter Team",
    price: "499",
    members: "2 Dedicated Developers",
    features: [
      "Website Development",
      "Frontend Development",
      "Bug Fixing & Maintenance",
      "Basic Technical Support",
    ],
  },
  {
    name: "Growth Team",
    price: "999",
    members: "4 Dedicated Developers",
    popular: true,
    features: [
      "Full Stack Development",
      "API Integration",
      "Database Management",
      "Testing & Updates",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise Team",
    price: "1,999",
    members: "6+ Dedicated Developers",
    features: [
      "Custom Software Development",
      "AI & Advanced Integrations",
      "Project Management",
      "Ongoing Maintenance",
      "Dedicated Technical Support",
    ],
  },
];

function TeamPackages() {
  return (
    <section className="team-packages-section" id="team-packages">
      <div className="team-packages-heading">
        <span>OUR TEAM PACKAGES</span>
        <h2>Choose Your Perfect Team</h2>
        <p>Get dedicated developers to build, manage and grow your projects.</p>
      </div>

      <div className="team-packages-grid">
        {packages.map((item) => (
          <article
            className={`team-package-card ${item.popular ? "popular" : ""}`}
            key={item.name}
          >
            {item.popular && (
              <span className="team-package-badge">MOST POPULAR</span>
            )}

            <h3>{item.name}</h3>

            <div className="team-package-price">
              <span>$</span>
              {item.price}
            </div>

            <p className="team-package-month">per month</p>

            <div className="team-package-members">{item.members}</div>

            <ul>
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a className="team-package-button" href="#contact">
              Get Started
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamPackages;
