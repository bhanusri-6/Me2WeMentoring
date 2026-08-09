import { useState } from "react";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section
      id="section-services"
      className="no-top no-bottom"
      data-bgcolor="#e4e6e9"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10">
            <div className="pt80 pb80">
              <span className="p-title">What We Do</span>
              <br />

              <h2>Our Services</h2>

              <ul
                className="nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className={`nav-link service-btn ${
                      activeTab === "home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("home")}
                  >
                    Individual Guidance Sessions
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link service-btn ${
                      activeTab === "profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    Collaborative Group Coaching
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link service-btn ${
                      activeTab === "contact" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Thematic Seminars & Talks
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link service-btn ${
                      activeTab === "coaching" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("coaching")}
                  >
                    Digital Coaching Platforms
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {activeTab === "home" && (
                  <div className="tab-pane fade show active">
                    <p>
                      One-on-one conversations designed to help you pause, reflect, and find clarity. These sessions create a safe space to understand yourself better and move forward with confidence and purpose.
                    </p>
                  </div>
                )}

                {activeTab === "profile" && (
                  <div className="tab-pane fade show active">
                    <p>
                      A guided group environment where learning happens through shared experiences. Participants grow together, gain perspective, and feel supported through collective understanding.
                    </p>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="tab-pane fade show active">
                    <p>
                      Thought-provoking sessions that invite you to explore life’s important questions—mindset, clarity, confidence, and direction—through shared insight and reflection.
                    </p>
                  </div>
                )}

                {activeTab === "coaching" && (
                  <div className="tab-pane fade show active">
                    <p>
                      Flexible online learning spaces that allow you to grow at your own pace, with guided content, reflective tools, and continued mentoring support— wherever you are.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </section>
  );
}
export default ServiceSection;