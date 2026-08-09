import React from "react";
import { motion } from "framer-motion";
import "./networkDetails.css";

const activities = [
  {
    title: "Breathing Awareness",
    duration: "5 Minutes",
    type: "Mind Reset",
    video: "/videos/breathing.mp4",
  },
  {
    title: "Morning Reset Ritual",
    duration: "8 Minutes",
    type: "Daily Clarity",
    video: "/videos/reset.mp4",
  },
  {
    title: "Emotional Detox",
    duration: "12 Minutes",
    type: "Inner Stability",
    video: "/videos/detox.mp4",
  },
];

const NetworkDetails = () => {
  return (
    <section className="network-details-page">

      {/* BACKGROUND GLOWS */}
      <div className="details-glow glow-1"></div>
      <div className="details-glow glow-2"></div>

      <div className="container-fluid">

        {/* HERO */}
        <div className="details-hero">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="details-left"
          >

            <span className="details-mini">
              COMMUNITY SYSTEM
            </span>

            <h1>
              W — WELLNESS
            </h1>

            <h3>
              Emotional Stability &
              Inner Clarity Framework
            </h3>

            <p>
              The Wellness System helps individuals develop
              emotional balance, self-awareness, stress
              regulation, and sustainable inner growth.
              This is not temporary motivation —
              it is a structured transformation process.
            </p>

            <div className="details-stats">

              <div className="detail-stat-card">
                <h4>12</h4>
                <span>Activities</span>
              </div>

              <div className="detail-stat-card">
                <h4>3h+</h4>
                <span>Video Learning</span>
              </div>

              <div className="detail-stat-card">
                <h4>PDF</h4>
                <span>Resources</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="details-right"
          >

            <div className="visual-circle"></div>

            <div className="wellness-letter">
              W
            </div>

            <div className="wellness-card">
              ❤️ Wellness System
            </div>

          </motion.div>

        </div>

        {/* ACTIVITIES */}
        <div className="activities-section">

          <div className="section-heading">
            <span>TRANSFORMATION ACTIVITIES</span>
            <h2>Activity Modules</h2>
          </div>

          <div className="activities-grid">

            {activities.map((item, index) => (
              <motion.div
                key={index}
                className="activity-card"
                initial={{
                  opacity: 0,
                  y: 80
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
              >

                {/* VIDEO */}
                <div className="activity-video">

                  <video
                    src={item.video}
                    controls
                  />

                </div>

                {/* CONTENT */}
                <div className="activity-content">

                  <span>
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    Guided activity session designed to
                    improve emotional awareness and
                    mental clarity.
                  </p>

                  <div className="activity-footer">

                    <div>
                      <small>Duration</small>
                      <h5>{item.duration}</h5>
                    </div>

                    <button>
                      Start Session
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* REFLECTION SECTION */}
        <div className="reflection-section">

          <div className="reflection-box">

            <span>SELF REFLECTION</span>

            <h2>
              Transformation Begins
              With Awareness
            </h2>

            <div className="reflection-grid">

              <div className="reflection-card">
                <h4>01</h4>
                <p>
                  What emotionally drains your energy most?
                </p>
              </div>

              <div className="reflection-card">
                <h4>02</h4>
                <p>
                  How do you respond under pressure?
                </p>
              </div>

              <div className="reflection-card">
                <h4>03</h4>
                <p>
                  What does emotional balance mean to you?
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NetworkDetails;