import "../../../public/css/program.css"
import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    title: "Career Guidance",
    duration: "12 Min",
    category: "Students",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Leadership Skills",
    duration: "18 Min",
    category: "Leadership",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Goal Setting",
    duration: "10 Min",
    category: "Growth",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Confidence Building",
    duration: "14 Min",
    category: "Mindset",
    thumbnail:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Student Mentorship",
    duration: "20 Min",
    category: "Education",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Personal Growth",
    duration: "16 Min",
    category: "Growth",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      {/* VIDEO SECTION */}
      <section className="videos-section">
        <div className="container">
          <div className="section-heading">
            <p>FEATURED VIDEOS</p>
            <h2>Mentorship Sessions</h2>
          </div>

          <div className="videos-grid">
            {videos.map((video, index) => (
              <div className="video-card" key={index}>
                <div
                  className="video-thumbnail-wrapper"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                  />

                  <button className="play-button">
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>

                <div className="video-content">
                  <div className="video-top">
                    <span className="video-category">
                      {video.category}
                    </span>

                    <span className="video-duration">
                      {video.duration}
                    </span>
                  </div>

                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {selectedVideo && (
        <div className="video-popup"
    onClick={() => setSelectedVideo(null)}>
          <div className="video-popup-content">
            <button
              className="close-popup"
        onClick={() => setSelectedVideo(null)}
            >
              <X size={28} />
            </button>

            <iframe
              width="100%"
              height="500"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}