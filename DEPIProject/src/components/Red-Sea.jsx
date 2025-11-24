import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Giza.css";

/* Variants */
const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export default function Giza() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const topBtn = document.getElementById("topBtn");
    function onScroll() {
      const show = window.scrollY > 300;
      if (topBtn) topBtn.style.display = show ? "block" : "none";
    }
    window.addEventListener("scroll", onScroll);
    if (topBtn) topBtn.style.display = "none";
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePosition({
      x: ((x - centerX) / centerX) * 20,
      y: ((y - centerY) / centerY) * 20,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />

      {/* 3D Header */}
      <motion.header
        className="luxor-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transform: `translateZ(80px)`, transformStyle: "preserve-3d" }}
        >
          <motion.h1 style={{ transform: `translateZ(60px)` }}>
            Red Sea Governorate
          </motion.h1>

          <motion.p style={{ transform: `translateZ(40px)` }}>
            Egypt’s diving paradise — home to crystal-clear waters, coral reefs, marine
            life, and world-famous beach towns like Hurghada & Marsa Alam.
          </motion.p>
        </motion.div>
      </motion.header>

      {/* Container */}
      <motion.div
        className="container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Description */}
        <motion.section id="desc" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-info"></i>
          </div>
          <h2 className="section-title">Description</h2>
          <div className="section-content">
            <p>
              The Red Sea Governorate is one of Egypt’s most stunning destinations,
              stretching along the eastern coastline and known globally for its diving
              spots, coral reefs, and golden beaches. It includes Hurghada, Marsa Alam,
              El Gouna, and Safaga — each offering a unique coastal experience.
            </p>
            <p>
              With its warm weather, luxury resorts, marine biodiversity, and exciting
              water activities, the Red Sea is a top destination for relaxation and
              adventure seekers.
            </p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section id="map" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="section-title">Location on Map</h2>
          <motion.div className="map-container" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485455.205759544!2d31.208702299999997!3d26.8205536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145d1e49ca9a2b51%3A0x3bfd4436464dbe40!2sRed%20Sea%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.section>

        {/* Landmarks */}
        <motion.section id="images" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-water"></i>
          </div>
          <h2 className="section-title">Red Sea Highlights</h2>

          <motion.div className="images">
            {/* Hurghada */}
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/images/hurghada.jpg" alt="Hurghada" />
              <div className="image-info">
                <h3>Hurghada</h3>
                <p>A world-famous beach city known for diving, nightlife, and luxury resorts.</p>
              </div>
            </motion.div>

            {/* Marsa Alam */}
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/images/marsa_alam.jpg" alt="Marsa Alam" />
              <div className="image-info">
                <h3>Marsa Alam</h3>
                <p>Home to dolphins, sea turtles, coral gardens, and untouched natural beauty.</p>
              </div>
            </motion.div>

            {/* El Gouna */}
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/images/elgouna.jpg" alt="El Gouna" />
              <div className="image-info">
                <h3>El Gouna</h3>
                <p>A modern, luxurious town with lagoons, marinas, and water sports.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video */}
        <motion.section id="video" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-video"></i>
          </div>
          <h2 className="section-title">Explore the Red Sea</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/4Z5oXgDd_Cc"
              title="Red Sea Video"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.section>

        {/* Hotels */}
        <motion.section id="hotels" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-hotel"></i>
          </div>
          <h2 className="section-title">Hotels</h2>
          <ul className="hotel-list">
            <li>Steigenberger Al Dau Beach Hotel</li>
            <li>Rixos Premium Magawish</li>
            <li>Hilton Marsa Alam Nubian Resort</li>
            <li>Sheraton Miramar El Gouna</li>
          </ul>
        </motion.section>
      </motion.div>

      <Footer />
    </>
  );
}
