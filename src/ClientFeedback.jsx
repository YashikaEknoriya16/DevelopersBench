import "./styles/ClientFeedback.css";

const feedbacks = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    role: "CTO",
    company: "TechStart Inc",
    feedback:
      "We hired three developers through ADRS and they exceeded all expectations. The quality and professionalism are outstanding.",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    role: "Product Manager",
    company: "InnovateCo",
    feedback:
      "The hiring process was incredibly smooth. We found the perfect developer for our React project within a week.",
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    role: "Founder",
    company: "StartupHub",
    feedback:
      "Cost-effective without compromising quality. Our developer has been instrumental in launching our MVP.",
  },
];

function ClientFeedback() {
  return (
    <section className="client-feedback-section">
      <div className="client-feedback-heading">
        <span>CLIENT TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p>Real experiences and feedback from our clients.</p>
      </div>

      <div className="client-feedback-grid">
        {feedbacks.map((item) => (
          <div className="client-feedback-card" key={item.company}>
            <div className="client-feedback-inner">
              <div className="client-feedback-front">
                <div className="client-feedback-stars">★★★★★</div>
                <p className="client-feedback-message">"{item.feedback}"</p>
                <div className="client-feedback-user">
                  <div className="client-feedback-avatar">{item.initials}</div>
                  <div>
                    <h3>{item.name}</h3>
                    <span>
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>
                <span className="flip-hint">Hover to flip ↻</span>
              </div>

              <div className="client-feedback-back">
                <div className="back-star">★★★★★</div>
                <h3>{item.name}</h3>
                <p>"A great experience working with ADRS!"</p>
                <span>{item.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientFeedback;
