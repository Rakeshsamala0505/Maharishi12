import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/magic.css";

const sections = {
  overview: {
    title: "MAHARISHI",
    text: "Behind MAHARISHI - Lies a Shared Global Vision.",
    details: "Global food security faces mounting threats from COVID-19, conflicts, and climate change. Millets and other ancient grains offer a sustainable solution whether it is climate-resilient, nutrient-rich, and resource-efficient, they can strengthen food systems, support smallholder farmers, and promote health and environmental sustainability.The MAHARISHI initiative, launched under India's G20 Presidency as part of the G20 MACS Global Research Collaboration Priority, promotes international research on these underutilized grains. Building on the momentum of the International Year of Millets 2023, it unites fragmented efforts under a shared framework to advance global food and nutrition security."

  },
  history: {
    title: "VISION",
    text: "Unlocking the potential of millets and ancient grains through global collaboration for sustainable, resilient, and healthier communities.",
    details: "To cultivate a globally connected and forward-looking research ecosystem that unlocks the full potential of millets and ancient grains through collaborative knowledge exchange, innovation, and inclusive partnerships ensuring sustainable agriculture, resilient food systems, and healthier communities for generations to come."
  },
  structure: {
    title: "MISSION",
    text: "Connecting global researchers on millets and ancient grains to share knowledge, accelerate innovation, and empower sustainable food systems.",
    details: "To establish robust mechanisms for connecting global researchers and institutions working on millets and ancient grains, enabling effective knowledge exchange, identification of research gaps, and dissemination of innovations. Through digital platforms, collaborative workshops, open-access publications, and recognition of young scientists, the initiative aims to accelerate research, build capacity, and raise awareness of the nutritional, cultural, and climate-resilient value of these crops empowering smallholder farmers and advancing sustainable food systems."
  },
  preparing: {
    title: "AIM",
    text: "Coordinating global research on millets and ancient grains to enhance food security, sustainable agriculture, and resilient, nutritious food systems.",
    details: "MAHARISHI aims to coordinate international research on millets and ancient grains to strengthen global food and nutrition security. By optimizing and pooling resources, the initiative seeks to enhance economic efficiency and add value to ongoing national and international efforts both public and private. We foster cross-country linkages to accelerate advancements in research and development, ensuring these climate-resilient crops contribute to sustainable agriculture. Our focus is on building scientific competence to meet evolving environmental challenges while responding to the growing demand for nutritious, safe, and resilient food systems."
  }
};

const Magic = () => {
  const [active, setActive] = useState("overview");

  // ✅ reference for bottom content
  const bottomRef = useRef(null);

  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="magic-page">

      {/* Title bar */}
      <div className="container">
        <div className="title-bar">
          <h4>MAGIC</h4>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container">
        <div className="hero-section">
          <div className="left-content">
            <h2>{sections[active].title}</h2>
            <hr className="divider" />
            <p>{sections[active].text}</p>

            {/* ✅ Learn More button */}
            <button className="learn-btn" onClick={handleScrollToBottom}>
              Learn More
            </button>
          </div>

          <div className="right-menu">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                className={active === key ? "active-btn" : ""}
                onClick={() => setActive(key)}
              >
                {sections[key].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="container">
        <motion.div
          className="bottom-card"
          ref={bottomRef} // ✅ attach reference
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* <h3>{sections[active].title} Details</h3> */}
          <p>{sections[active].details}</p>
        </motion.div>
      </div>

    </div>
  );
};

export default Magic;
