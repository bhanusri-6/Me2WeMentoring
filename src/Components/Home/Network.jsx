import { motion } from "framer-motion";

const Network = () => {

  const networkData = [
    {
      letter: "W",
      title: "Wellness",
      icon: "❤️",
      text: "Creating emotionally healthy communities."
    },
    {
      letter: "E",
      title: "Educate",
      icon: "📘",
      text: "Learning with clarity and awareness."
    },
    {
      letter: "A",
      title: "Accountability",
      icon: "✅",
      text: "Building responsible life systems."
    },
    {
      letter: "L",
      title: "Listen",
      icon: "👂",
      text: "Understanding before reacting."
    },
    {
      letter: "L",
      title: "Lift",
      icon: "🤝",
      text: "Helping people rise together."
    },
    {
      letter: "S",
      title: "Serve",
      icon: "🌍",
      text: "Supporting communities with purpose."
    },
    {
      letter: "A",
      title: "Advance",
      icon: "📈",
      text: "Helping individuals continuously evolve toward higher potential."
    },
    {
      letter: "M",
      title: "Mental Care",
      icon: "🧠",
      text: "Creating emotionally safe and mentally balanced communities."
    },
    {
      letter: "G",
      title: "Gratitude",
      icon: "🙏",
      text: "Developing appreciation, emotional balance, and positive life awareness."
    },
  ];

  return (
    <section className="network-section">

      <div className="container">

        <div className="network-heading">
          <span>COMMUNITY ECOSYSTEM</span>
          <h2>ME TO WE Network</h2>

          <p>
            Building emotionally connected growth communities.
          </p>
        </div>

        <div className="network-timeline">

          {networkData.map((item, index) => (

            <motion.div
              key={index}
              className="network-item"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
            >

              <div className="network-letter">
                {item.letter}
              </div>

              <div className="network-card">

                <div className="network-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Network;