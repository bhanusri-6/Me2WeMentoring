import "./journey.css";
import { Link } from "react-router-dom";

const journeySteps = [
  {
    id: "01",
    title: "Discover Yourself",
    desc: "Build self-awareness and understand your strengths, values, and life purpose."
  },
  {
    id: "02",
    title: "Build Your Mindset",
    desc: "Replace limiting beliefs with empowering thoughts that create growth."
  },
  {
    id: "03",
    title: "Develop Powerful Habits",
    desc: "Create daily routines that improve productivity, discipline, and consistency."
  },
  {
    id: "04",
    title: "Master Emotional Intelligence",
    desc: "Understand emotions, improve relationships, and make better decisions."
  },
  {
    id: "05",
    title: "Leadership & Communication",
    desc: "Develop confidence, influence, and effective communication skills."
  },
  {
    id: "06",
    title: "Technology & Business",
    desc: "Learn modern skills to grow professionally and financially."
  },
  {
    id: "07",
    title: "Create Impact",
    desc: "Inspire others and create meaningful change in your community."
  },
  {
    id: "08",
    title: "Build Your Legacy",
    desc: "Leave a lasting impact through purpose-driven leadership and service."
  }
];

const Journey = () => {
  return (
    <div className="journey-page">

      {/* Hero */}

      <section className="journey-hero">

        <div className="journey-container">

          <span className="hero-tag">
            LIFE ARCHITECT ROADMAP
          </span>

          <h1>
            Your <span>Transformation</span> Journey
          </h1>

          <p>
            Every extraordinary life begins with one decision.
            Discover, Grow, Lead and Leave a Legacy.
          </p>

          <Link to="/system" className="hero-btn">
            Explore Programs
          </Link>

        </div>

      </section>

      {/* Timeline */}

      <section className="timeline-section">

        <div className="journey-container">

          <div className="section-title">

            <span>ROADMAP</span>

            <h2>8 Stages of Transformation</h2>

          </div>

          <div className="timeline">

            {journeySteps.map((step, index) => (

              <div
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                key={step.id}
              >

                <div className="timeline-number">
                  {step.id}
                </div>

                <div className="timeline-card">

                  <h3>{step.title}</h3>

                  <p>{step.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="journey-cta">

        <div className="journey-container">

          <h2>
            Ready To Begin Your Journey?
          </h2>

          <p>
            Explore the Life Architect transformation systems and
            start building the future you deserve.
          </p>

          <Link to="/system" className="hero-btn">
            Start Now
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Journey;