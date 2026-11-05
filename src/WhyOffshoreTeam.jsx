import {
  BriefcaseBusiness,
  Settings,
  TrendingUp,
  DollarSign,
  Server,
  ShieldCheck,
} from "lucide-react";

import "./styles/WhyOffshoreTeam.css";

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Dedicated Team",
    description:
      "Your own offshore development team with handpicked professionals.",
    color: "blue",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Direct management and communication with your team members.",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description: "Easily scale your team up or down based on project demands.",
    color: "green",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce development costs while maintaining quality.",
    color: "orange",
  },
  {
    icon: Server,
    title: "Infrastructure Ready",
    description: "Access modern infrastructure and development facilities.",
    color: "indigo",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description:
      "Keep your projects protected with reliable security practices.",
    color: "red",
  },
];

function WhyOffshoreTeam() {
  return (
    <section className="why-offshore" id="why-offshore">
      <div className="why-offshore-container">
        <div className="why-offshore-heading">
          <span>WHY CHOOSE OFFSHORE TEAM</span>
          <h2>Why Setup an Offshore Team?</h2>
          <div className="why-offshore-line"></div>
          <p>
            Build a dedicated development team with the flexibility, expertise
            and support your business needs.
          </p>
        </div>

        <div className="why-offshore-grid">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="why-offshore-item" key={index}>
                <div className={`why-offshore-icon ${item.color}`}>
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyOffshoreTeam;
