import { Globe2, UsersRound, Settings, Rocket, ArrowRight } from "lucide-react";
import "./styles/SetupProcess.css";

const steps = [
  {
    icon: <Globe2 />,
    week: "WEEK 1",
    title: "Discovery",
    description: "Understanding your business goals and project requirements.",
    tasks: ["Requirement analysis", "Team planning", "Tech stack finalization"],
    color: "blue",
  },
  {
    icon: <UsersRound />,
    week: "WEEK 2–3",
    title: "Team Building",
    description: "Finding the right talent for your project.",
    tasks: ["Candidate screening", "Technical interviews", "Team selection"],
    color: "purple",
  },
  {
    icon: <Settings />,
    week: "WEEK 4",
    title: "Setup",
    description: "Preparing the tools and infrastructure for your team.",
    tasks: [
      "Infrastructure setup",
      "Tool provisioning",
      "Process establishment",
    ],
    color: "green",
  },
  {
    icon: <Rocket />,
    week: "WEEK 5",
    title: "Launch",
    description: "Getting your selected team ready to start building.",
    tasks: ["Team kickoff", "Sprint planning", "Development begins"],
    color: "orange",
  },
];

function SetupProcess() {
  return (
    <section className="setup-section" id="setup-process">
      <div className="setup-container">
        <div className="setup-heading">
          <span className="setup-eyebrow">HOW WE WORK</span>
          <h2>Setup Process</h2>
          <p>From concept to a fully operational team in just 5 weeks.</p>
          <div className="setup-heading-line"></div>
        </div>

        <div className="setup-grid">
          {steps.map((step, index) => (
            <article
              className={`setup-card setup-${step.color}`}
              key={step.title}
              style={{ "--card-index": index }}
            >
              <div className="setup-icon">{step.icon}</div>

              <span className="setup-week">{step.week}</span>

              <h3>{step.title}</h3>

              <p className="setup-description">{step.description}</p>

              <ul>
                {step.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>

              <div className="setup-card-bottom">
                <span>Step 0{index + 1}</span>
                <ArrowRight size={18} />
              </div>
            </article>
          ))}
        </div>

        <div className="setup-note">
          <span>✦</span>
          Ready to build your next team?
          <a href="#contact">
            Let's get started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SetupProcess;
