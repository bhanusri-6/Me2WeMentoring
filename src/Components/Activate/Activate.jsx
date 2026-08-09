import React from "react";
import "./Activate.css";

const LMS_URL = "https://your-lms-url.com";

const plans = [
  {
    name: "STARTER",
    price: "₹999",
    period: "/ month",
    description: "Begin your transformation journey.",
    features: [
      "Selected learning programs",
      "Video lessons",
      "Basic learning resources",
      "Progress tracking",
    ],
  },
  {
    name: "TRANSFORM",
    price: "₹2,499",
    period: "/ month",
    popular: true,
    description: "Build yourself across every dimension.",
    features: [
      "All transformation programs",
      "Complete video library",
      "Learning resources",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    name: "GREATNESS",
    price: "₹4,999",
    period: "/ month",
    description: "Unlock the complete M2W experience.",
    features: [
      "Full LMS access",
      "All transformation systems",
      "Premium learning content",
      "Advanced resources",
      "Community & support",
      "Future program access",
    ],
  },
];

const Activate = () => {
  const handleActivate = () => {
    window.open(LMS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="activate-page">

      {/* HERO */}
      <section className="activate-hero">

        <div className="activate-glow activate-glow-one"></div>
        <div className="activate-glow activate-glow-two"></div>

        <div className="activate-hero-content">

          <span className="activate-label">
            ACTIVATE YOUR JOURNEY
          </span>

          <h1>
            Choose Your Path
            <span> To Greatness.</span>
          </h1>

          <p>
            Access powerful learning experiences designed to transform
            your mindset, skills, relationships, leadership and life.
          </p>

        </div>

      </section>

      {/* PRICING */}
      <section className="pricing-section">

        <div className="pricing-heading">
          <span>LEARNING ACCESS</span>

          <h2>
            Invest In Your
            <strong> Growth.</strong>
          </h2>

          <p>
            Choose the experience that fits your journey and start
            transforming from within.
          </p>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (

            <div
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
              key={plan.name}
            >

              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="plan-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span className="plan-name">
                {plan.name}
              </span>

              <h3>
                {plan.price}
                <small>{plan.period}</small>
              </h3>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="plan-divider"></div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="activate-btn"
                onClick={handleActivate}
              >
                Activate Now
                <span>→</span>
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="activate-bottom">

        <span>READY TO BEGIN?</span>

        <h2>
          Your next chapter
          <strong> starts here.</strong>
        </h2>

        <p>
          Step into the M2W learning ecosystem and begin your
          transformation today.
        </p>

        <button
          className="bottom-activate-btn"
          onClick={handleActivate}
        >
          Enter LMS →
        </button>

      </section>

    </main>
  );
};

export default Activate;