import { motion } from "framer-motion";
import "./Contact.css";
import CarouselHero from "../Component/Carousel";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      {/* Ảnh nền cho phần Contact */}
      <div className="contact-bg" />

      {/* Nội dung chính */}
      <div className="container contact-content">
        {/* Hero */}
        <CarouselHero />

        <motion.h2
          className="text-center mb-5 mt-3 fw-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          className="row g-4 shadow-lg p-4 contact-form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <motion.div className="col-md-6">
            <label className="form-label fw-semibold">Name <i className="fas fa-user"></i></label>
            <motion.input
              className="form-control custom-input"
              placeholder="Your name"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div className="col-md-6">
            <label className="form-label fw-semibold">Email <i className="fas fa-envelope"></i></label>
            <motion.input
              type="email"
              className="form-control custom-input"
              placeholder="you@example.com"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Message */}
          <motion.div className="col-12">
            <label className="form-label fw-semibold">Message <i className="fas fa-comment-dots"></i></label>
            <motion.textarea
              className="form-control custom-input"
              rows="4"
              placeholder="How can we help?"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.textarea>
          </motion.div>

          {/* Button */}
          <div className="col-12 text-center">
            <motion.button
              className="btn btn-primary contact-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <i className="fas fa-paper-plane"></i>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
