import { Users, BriefcaseBusiness, Star } from "lucide-react";
import "./styles/TrackRecord.css";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Developers Deployed",
  },
  {
    icon: BriefcaseBusiness,
    number: "150+",
    label: "Offshore Teams Built",
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
  },
];

function TrackRecord() {
  return (
    <section className="track-record" id="track-record">
      <div className="track-record-container">
        <div className="track-record-heading">
          <h2>Our Track Record</h2>
          <span></span>
        </div>

        <div className="track-record-stats">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="track-record-item" key={index}>
                <Icon className="track-record-icon" size={42} />
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrackRecord;
