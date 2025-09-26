import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="about-wrapper">
      {/* Ảnh nền */}
      <div
        className="about-bg"
        style={{ backgroundImage: `url('${baseUrl}images/banner-bg.png')` }}
      />

      <div className="container py-5 about-container">
        <div className="row g-4">
          {/* Cột trái */}
          <div className="col-12 col-lg-6">
            {/* Logo */}
            <motion.div
              className="about-logo-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={`${baseUrl}images/logo1.png`}
                alt="SuperCar Store Logo"
                className="about-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>

            {/* Tiêu đề */}
            <motion.h2
              className="about-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About SuperCar Store
            </motion.h2>

            {/* Mô tả */}
            <motion.p
              className="about-desc"
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

            {/* Danh sách */}
            <motion.ul
              className="about-list"
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

          {/* Cột phải */}
          <div className="col-12 col-lg-6">
            <motion.div
              className="about-card mb-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="mb-3">Founder</h4>
              <div className="d-flex">
                <img
                  src="/react-car-shop/images/nsl.png"
                  alt="Nhà sáng lập"
                  className="about-founder-img"
                />
                <p>
                  Mr. <strong>Sergio Marchionne</strong> – Doanh nhân đam mê siêu xe
                  với hơn 40 năm kinh nghiệm trong lĩnh vực ô tô cao cấp.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="mb-3">📅 Năm thành lập</h4>
              <p>
                SuperCar Store được thành lập năm <strong>2010</strong>, với mục tiêu
                mang những dòng siêu xe tốt nhất đến khách hàng Việt Nam.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Doanh số */}
        <motion.div
          className="about-sales"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="mb-3 text-center">📊 Doanh số từ 2020 đến nay</h4>
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Năm</th>
                  <th>Số xe bán ra</th>
                  <th>Doanh thu (tỷ VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020</td>
                  <td>150</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>200</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>250</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>300</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>2024</td>
                  <td>320</td>
                  <td>960</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
