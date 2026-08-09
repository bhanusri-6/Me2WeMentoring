import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Program.css";

const API_URL = "http://localhost:5000/api/therapies";

const SystemDetail = () => {
  const { id } = useParams();

  const [system, setSystem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSystem = async () => {
      try {
        const response = await fetch(
          `${API_URL}/${id}`
        );

        const result = await response.json();

        if (result.success) {
          setSystem(result.data);
        }
      } catch (error) {
        console.error(
          "Error fetching system:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSystem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!system) {
    return <div>System Not Found</div>;
  }

  return (
    <div className="system-page">

      {/* HERO */}
      <div className="hero">

        <img
          src={`http://localhost:5000${system.thumbnail}`}
          alt={system.title}
          className="hero-image"
        />

        <div className="hero-content">
          <h1>{system.title}</h1>

          <p>{system.description}</p>
        </div>

      </div>

      {/* PROGRAMS */}
      <div className="blog-list">

        {system.programs?.map((program) => (

          <div
            className="blog-card"
            key={program.id}
          >

            <div className="blog-content">

              <span className="date">
                PROGRAM{" "}
                {String(
                  program.program_number
                ).padStart(2, "0")}
              </span>

              <h3>
                {program.program_title}
              </h3>

              <p>
                {program.program_description}
              </p>

              <button
                type="button"
                onClick={() =>
                  setSelectedVideo(program)
                }
              >
                ▶ Watch Preview
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* VIDEO MODAL */}
      {selectedVideo && (

        <div
          className="video-modal"
          onClick={() =>
            setSelectedVideo(null)
          }
        >

          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={() =>
                setSelectedVideo(null)
              }
            >
              ✕
            </button>

            <iframe
              src={getYoutubeEmbedUrl(
                selectedVideo.youtube_link
              )}
              title={
                selectedVideo.program_title
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <h3>
              {selectedVideo.program_title}
            </h3>

            <p>
              {
                selectedVideo.program_description
              }
            </p>

          </div>

        </div>

      )}

    </div>
  );
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";

  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
};

export default SystemDetail;