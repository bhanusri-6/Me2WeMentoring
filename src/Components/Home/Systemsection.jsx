import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "../../../public/css/System.css";

const API_URL = `${import.meta.env.Vite_Api_Url}/api/therapies`;

const Systemsection = ({ showAll = false }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTherapies = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.success) {
          setData(result.data || []);
        }
      } catch (error) {
        console.error("Error fetching therapies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapies();
  }, []);

  const displayData = showAll
    ? data
    : data.slice(0, 3);

  if (loading) {
    return (
      <section className="systems-section">
        <div className="systems-heading">
          <span>PROGRAM ECOSYSTEM</span>
          <h2>Transformation Systems</h2>
        </div>

        <p>Loading programs...</p>
      </section>
    );
  }

  return (
    <section className="systems-section">

      <div className="systems-heading">
        <span>PROGRAM ECOSYSTEM</span>
        <h2>Transformation Systems</h2>
      </div>

      <div className="systems-scroll-wrapper">

        {displayData.map((item, index) => (
          <div
            className="system-card"
            key={item.id}
          >

            {/* Number */}
            <div className="bg-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Image */}
            <div className="card-image">
              <img
                src={`http://localhost:5000${item.thumbnail}`}
                alt={item.title}

              />
            </div>

            {/* Content */}
            <div className="card-content">

              <h3>{item.title}</h3>

              <p>{item.tagline}</p>

              <div className="card-buttons">

                <Link to={`/system/${item.id}`}>
                  Read More
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

      {selected && (
        <Modal
          data={selected}
          close={() => setSelected(null)}
        />
      )}

      <div className="view-all-button-container">
        <button className="view-all-button">
          <Link to="/System" onClick={() => setSelected(null)}>
            View All Programs
          </Link>
        </button>
      </div>

    </section>
  );
};

export default Systemsection;