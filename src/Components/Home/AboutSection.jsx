

const AboutSection = () => {
  return (
    <div>
     <section id="section-about" className="about-vision-section">

  <div className="container">

    {/* Top Heading */}
    <div className="about-heading-wrap">

      <span className="about-mini-title">
        LIFE ARCHITECT SYSTEM
      </span>

      <h2>
        Beyond Motivation.
        <span> Designed Transformation.</span>
      </h2>

      <div className="about-line"></div>
    </div>

    {/* Main Layout */}
    <div className="about-grid">

      {/* LEFT IMAGE SIDE */}
      <div className="about-image-side">

        <div className="about-image-glow"></div>

        <img
          src="/images/aboutsection.png"
          alt=""
          className="about-main-image"
        />

        {/* Floating Stats */}
        <div className="floating-card card-1">
          <h3>100+</h3>
          <p>Transformations</p>
        </div>

        <div className="floating-card card-2">
          <h3>500+</h3>
          <p>Participants</p>
        </div>

      </div>

      {/* RIGHT CONTENT SIDE */}
      <div className="about-content-side">

        <div className="vision-box">
          <span>VISION</span>

          <h3>
            We don't build temporary motivation.
            We build identity-driven transformation systems.
          </h3>
        </div>

        <div className="about-text-block">
          <p>
            Most people are taught how to survive pressure,
            but never taught how to understand themselves.
          </p>

          <p>
            The Life Architect framework helps people align
            identity, purpose, emotional clarity, and future direction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="about-feature-grid">

          <div className="feature-card">
            <h4>Identity</h4>
            <p>Understand who you are becoming.</p>
          </div>

          <div className="feature-card">
            <h4>Purpose</h4>
            <p>Create direction with clarity.</p>
          </div>

          <div className="feature-card">
            <h4>Systems</h4>
            <p>Build repeatable life frameworks.</p>
          </div>

          <div className="feature-card">
            <h4>Growth</h4>
            <p>Engineer long-term transformation.</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default AboutSection
