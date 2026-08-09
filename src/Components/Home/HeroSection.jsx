import { motion } from "framer-motion";
import "../../../public/css/hero.css"
const HeroSection = () => {
  return (
    <section id="section-home" className="hero-section-new">
      
      {/* Background Effects */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="hero-grid-overlay"></div>

      {/* Floating Shapes */}
      <motion.div
        className="floating-shape shape-1"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="floating-shape shape-2"
        animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container">
        <div className="row align-items-center min-vh-100">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-7 col-md-12 hero-left-content">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="hero-badge"
  >
    THE LIFE ARCHITECT SYSTEM
  </motion.div>

  {/* Small Top Line */}
  <div className="hero-top-line"></div>

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="hero-main-title"
  >
    THE LIFE
    <span> ARCHITECT </span>
    COMMAND CENTER
  </motion.h1>

  {/* Accent Glow Text */}
  <div className="hero-mini-text">
    COMMAND YOUR MIND • DESIGN YOUR DESTINY
  </div>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="hero-description"
  >
    This Command Center was created and maintained by a
    <strong> Life Architect</strong>.
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="hero-description"
  >
    Most platforms teach you what to do. Very few help you understand who you are becoming while you do it. This is where identity, purpose, confidence, and transformation come together.
  </motion.p>

  {/* Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="hero-btn-group"
  >
    <a href="#section-events" className="btn-main">
      Enter Command Center
    </a>

    <a href="#about" className="btn-secondary">
      Explore Journey
    </a>
  </motion.div>
</div>
<div className="col-lg-5 col-md-12 hero-right-wrapper">

  <div className="hero-right-panel">
      {/* Quote */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3 }}
      className="hero-quote-box"
    >
      <div className="quote-icon">✦</div>

      <h3>
        Design Your Life.
        <br />
        Build Your Identity.
        <br />
        Engineer Your Future.
      </h3>

      <div className="quote-line"></div>
    </motion.div>

    {/* Stats */}
    <div className="hero-stats-row">
      <div className="hero-stat-box">
        <h4>Identity</h4>
        <span>Self Alignment</span>
      </div>

      <div className="hero-stat-box">
        <h4>Purpose</h4>
        <span>Life Direction</span>
      </div>

    </div>
      <div className="hero-stat-box">
        <h4>Growth</h4>
        <span>Future Engineering</span>
      </div>

  

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;