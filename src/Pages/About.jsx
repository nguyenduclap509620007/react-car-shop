import { motion } from "framer-motion";

export default function About() {
  // Lấy baseUrl tự động (local = "/", build = "/react-car-shop/")
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div style={{ position: "relative", minHeight: "80vh" }}>
      {/* Ảnh nền */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage: `url('${baseUrl}images/banner-bg.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* Nội dung */}
      <div
        className="container text-center my-5 py-4 px-2 px-md-5"
        style={{ paddingTop: "70px", position: "relative", zIndex: 1 }}
      >
        {/* Logo có hiệu ứng */}
        <motion.div
          className="mb-4 d-flex justify-content-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={`${baseUrl}images/logo1.png`}
            alt="SuperCar Store Logo"
            className="img-fluid"
            style={{
              width: "250px",
              maxWidth: "60vw",
              height: "auto",
              padding: 20,
              borderRadius: "50%",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Tiêu đề */}
        <motion.h2
          className="mb-3 fs-2 fs-md-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About SuperCar Store
        </motion.h2>

        {/* Đoạn mô tả */}
        <motion.p
          className="lead fs-6 fs-md-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>SuperCar Store</strong> là showroom chuyên cung cấp các dòng{" "}
          <em>siêu xe thể thao</em> hàng đầu thế giới. Chúng tôi mang đến trải
          nghiệm mua sắm đẳng cấp, dịch vụ chuyên nghiệp và những chiếc xe chính
          hãng đến từ các thương hiệu danh giá như Ferrari, Lamborghini, Porsche
          và McLaren.
        </motion.p>

        {/* Danh sách với hiệu ứng */}
        <motion.ul
          className="list-unstyled mt-4 text-start text-md-center mx-auto"
          style={{ maxWidth: 500 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            "🏎️ Phân phối siêu xe thể thao chính hãng",
            "💳 Hỗ trợ tài chính & trả góp linh hoạt",
            "🛠️ Bảo hành chính hãng 5 năm",
            "🚨 Dịch vụ cứu hộ & hỗ trợ 24/7",
            "📍 Showroom: Số 40 C1, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh",
            "📞 Hotline: (028) 38.256.713 - (028) 38.225.340 - (028) 38.296.764",
            "📧 Email: Super-Sport.com.vn",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
