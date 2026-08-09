import "./Aboutus.css";
import aboutImage from "../../../public/images/gallery/about.jpeg"; // Change your image path

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">

          <div className="about-hero-wrapper">

            {/* LEFT */}

            <div className="about-left">

              <span className="about-tag">
                ABOUT LIFE ARCHITECT
              </span>

              <h1 className="about-title">
                Design Your <span>Life.</span><br />
                Build Your <span>Legacy.</span>
              </h1>

              <p className="about-desc">
                Life Architect is a transformational learning ecosystem created
                to help individuals discover purpose, develop leadership,
                strengthen emotional intelligence, and build a meaningful life.
                We believe every person has the potential to become the architect
                of their own future.
              </p>

              <a href="/contact" className="about-btn">
                Start Your Journey →
              </a>

            </div>

            {/* RIGHT */}

            <div className="about-right">

              <div className="about-image-box">

                <img
                  src={aboutImage}
                  alt="Founder"
                  className="about-image"
                />

                <div className="exp-card">

                  <h2>15+</h2>

                  <p>
                    Years of Experience in Personal Growth,
                    Leadership & Human Transformation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION */}

      <section className="mission-section">

        <div className="about-container">

          <div className="section-heading">

            <span>OUR FOUNDATION</span>

            <h2>Mission • Vision • Values</h2>

          </div>

          <div className="mission-grid">

            <div className="mission-card">

              <div className="mission-icon">
                🎯
              </div>

              <h3>Mission</h3>

              <p>
                Empower individuals to unlock their true potential through
                structured learning, self-awareness, leadership and purposeful
                action.
              </p>

            </div>

            <div className="mission-card">

              <div className="mission-icon">
                🚀
              </div>

              <h3>Vision</h3>

              <p>
                To create millions of purpose-driven leaders who positively
                influence families, organizations and society.
              </p>

            </div>

            <div className="mission-card">

              <div className="mission-icon">
                💎
              </div>

              <h3>Core Values</h3>

              <p>
                Integrity, Growth, Excellence, Innovation, Compassion,
                Leadership and Lifelong Learning.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="about-container">

          <div className="stats-grid">

            <div className="stat-card">
              <h2>15+</h2>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <h2>5000+</h2>
              <span>Students Guided</span>
            </div>

            <div className="stat-card">
              <h2>100+</h2>
              <span>Workshops Conducted</span>
            </div>

            <div className="stat-card">
              <h2>25+</h2>
              <span>Transformation Programs</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;