import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div style={{ position: "relative", minHeight: "80vh" }}>
      {/* Ảnh nền cho phần Contact */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage: "url('/images/banner-bg.png')", // Đổi đường dẫn ảnh nền tại đây
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1, // Có thể chỉnh độ mờ nếu muốn
        }}
      />
      {/* Nội dung chính */}
      <div
        className="container my-5"
        style={{
          paddingTop: "70px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          className="row g-4 shadow-lg p-4 rounded"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(255,255,255,0.7)", // Nền trong suốt mờ
            backdropFilter: "blur(8px)", // Làm mờ nền phía sau (nếu trình duyệt hỗ trợ)
            borderRadius: "18px",
          }}
        >
          {/* Name */}
          <motion.div className="col-md-6">
            <label className="form-label fw-semibold">Name</label>
            <motion.input
              className="form-control"
              placeholder="Your name"
              style={{ borderRadius: "12px" }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div className="col-md-6">
            <label className="form-label fw-semibold">Email</label>
            <motion.input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              style={{ borderRadius: "12px" }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Message */}
          <motion.div className="col-12">
            <label className="form-label fw-semibold">Message</label>
            <motion.textarea
              className="form-control"
              rows="4"
              placeholder="How can we help?"
              style={{ borderRadius: "12px" }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.textarea>
          </motion.div>

          {/* Button */}
          <div className="col-12 text-center">
            <motion.button
              className="btn btn-primary px-5 py-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: "25px", fontWeight: "600" }}
            >
              Send Message ✉️
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
