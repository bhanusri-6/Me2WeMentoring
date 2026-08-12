import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const API_URL = `${import.meta.env.Vite_Api_Url}/api`;
const IMAGE_URL = `${import.meta.env.Vite_Api_Url}`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==============================
  // FETCH ACTIVE TESTIMONIALS
  // ==============================

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${API_URL}/testimonials/active`
        );

        const result = await response.json();

        if (result.success) {
          setTestimonials(result.data || []);
        }
      } catch (error) {
        console.error(
          "Testimonials fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Don't show section while loading
  if (loading) {
    return null;
  }

  // Don't show section if no active testimonials
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="testimonials-section">

      {/* GLOWS */}
      <div className="testimonial-glow glow-left"></div>
      <div className="testimonial-glow glow-right"></div>

      <div className="container">

        {/* HEADING */}
        <div className="testimonial-heading">

          <h2>
            Voices Of
            <span> Transformation</span>
          </h2>

          <p>
            Real experiences from individuals who embraced
            growth, clarity, and self-transformation.
          </p>

        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          centeredSlides={true}
          loop={testimonials.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            992: {
              slidesPerView: 1.2,
            },
          }}
        >

          {testimonials.map((item) => (

            <SwiperSlide key={item.id}>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="testimonial-card"
              >

                {/* BIG QUOTE */}
                <div className="quote-bg">
                  ”
                </div>

                <div className="testimonial-top">

                  <div className="quote-icon">
                    ✦
                  </div>

                  <span>
                    TRANSFORMATION EXPERIENCE
                  </span>

                </div>

                <div className="testimonial-rating">
  {"★".repeat(Number(item.rating))}
  <span className="rating-number">
    {item.rating}/5
  </span>
</div>

                {/* REVIEW */}

                <p>
                  {item.review}
                </p>

                {/* AUTHOR */}

                <div className="testimonial-bottom">

                  <div className="author-image">
                    {item.image ? (
                    <img
                      src={`${IMAGE_URL}${item.image}`}
                      alt={item.name}
                      className="author-circle"
                    />
                  ) : (
                    <div className="author-circle">
                      {item.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                    </div>
                  )}
                  </div>

                  <div>
                    <h5>
                      {item.name}
                    </h5>

                    <small>
                      {item.designation}
                    </small>
                  </div>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;