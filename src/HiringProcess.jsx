import { Users, BadgeCheck, Star, Rocket } from "lucide-react";
import "./styles/HiringProcess.css";

const steps = [
  {
    number: "01",
    title: "Share Requirements",
    description: "Tell us your needs",
    icon: Users,
    color: "hiring-blue",
  },
  {
    number: "02",
    title: "Review Profiles",
    description: "Get matched candidates",
    icon: BadgeCheck,
    color: "hiring-purple",
  },
  {
    number: "03",
    title: "Interview & Select",
    description: "Choose your developer",
    icon: Star,
    color: "hiring-green",
  },
  {
    number: "04",
    title: "Start Working",
    description: "Begin development",
    icon: Rocket,
    color: "hiring-orange",
  },
];

function HiringProcess() {
  return (
    <section className="hiring-process" id="hiring-process">
      <div className="hiring-process-container">
        <div className="hiring-heading">
          <span>HOW IT WORKS</span>
          <h2>Simple Hiring Process</h2>
          <p>Get started in just 4 easy steps</p>
          <div className="hiring-heading-line"></div>
        </div>

        <div className="hiring-steps">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="hiring-step" key={step.number}>
                <div className={`hiring-icon ${step.color}`}>
                  <Icon size={34} strokeWidth={2} />
                </div>

                <span className="hiring-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HiringProcess;
