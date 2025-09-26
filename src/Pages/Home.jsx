import { motion } from "framer-motion";
import CarouselHero from "../Component/Carousel";
import CarCard from "../Component/CarCard";
import "./Home.css";

const featured = [
  {
    id: 1,
    name: "Chevrolet Camaro",
    price: 26.1,
    type: "sport",
    image: "/react-car-shop/images/chevroletcamaro.png",
    desc: "Sport 2 cửa, turbo.",
  },
  {
    id: 2,
    name: "Mazda MX-5 Miata 2023",
    price: 28.05,
    type: "sport",
    image: "/react-car-shop/images/MazdaMX-5Miata2023.png",
    desc: "Cơ bắp Mỹ.",
  },
  {
    id: 3,
    name: "Toyota GR 86",
    price: 28.4,
    type: "suv",
    image: "/react-car-shop/images/ToyotaGR86.png",
    desc: "SUV siêu sang, siêu mạnh.",
  },
  {
    id: 4,
    name: "Subaru BRZ",
    price: 28.595,
    type: "suv",
    image: "/react-car-shop/images/SubaruBRZ.png",
    desc: "SUV cao cấp.",
  },
  {
    id: 5,
    name: "Dodge Challenger",
    price: 31.1,
    type: "sedan",
    image: "/react-car-shop/images/DodgeChallenger.png",
    desc: "Sedan hạng sang.",
  },
  {
    id: 6,
    name: "BMW 230i Coupe",
    price: 38.2,
    type: "sedan",
    image: "/react-car-shop/images/BMW230iCoupe.png",
    desc: "Sedan bền bỉ, tiết kiệm.",
  },
  {
    id: 7,
    name: "Nissan Z",
    price: 40.99,
    type: "suv",
    image: "/react-car-shop/images/NissanZ.png",
    desc: "SUV siêu sang, siêu mạnh.",
  },
  {
    id: 8,
    name: "Toyota GR Supra",
    price: 44.04,
    type: "suv",
    image: "/react-car-shop/images/ToyotaGRSupra.png",
    desc: "SUV cao cấp.",
  },
  {
    id: 9,
    name: "Audi TT Coupe",
    price: 52.0,
    type: "sedan",
    image: "/react-car-shop/images/AudiTTCoupe.png",
    desc: "Sedan hạng sang.",
  },
  {
    id: 10,
    name: "BMW Z4",
    price: 52.8,
    type: "sedan",
    image: "/react-car-shop/images/BMWZ4.png",
    desc: "Sedan bền bỉ, tiết kiệm.",
  },
    {
    id: 11,
    name: "Audi TT Coupe",
    price: 52.0,
    type: "sedan",
    image: "/react-car-shop/images/AudiTTCoupe.png",
    desc: "Sedan hạng sang.",
  },
  {
    id: 12,
    name: "BMW Z4",
    price: 52.8,
    type: "sedan",
    image: "/react-car-shop/images/BMWZ4.png",
    desc: "Sedan bền bỉ, tiết kiệm.",
  },
];

export default function Home() {
  const handleBuy = (car) => alert(`Bạn đã chọn mua: ${car.name}`);

  return (
    <div className="home-wrapper">
      <div className="home-content mt-3 px-2 px-md-5">
        {/* Hero */}
        <CarouselHero />

        {/* Featured cars */}
        <section className="container mt-5 px-0">
          <motion.h2
            className="mb-3 text-center fw-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Featured Cars
          </motion.h2>

          <div className="row g-4">
            {featured.map((c, index) => (
              <motion.div
                key={c.id}
                className="col-12 col-sm-6 col-lg-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <CarCard car={c} onBuy={handleBuy} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Doanh số */}
        <section className="container mt-5">
          <h2 className="text-center mb-4">📊 Doanh số cửa hàng xe (2021-2025)</h2>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {[
              { year: 2021, count: "320 xe", rev: "35 tỷ" },
              { year: 2022, count: "450 xe", rev: "50 tỷ" },
              { year: 2023, count: "500 xe", rev: "60 tỷ" },
              { year: 2024, count: "610 xe", rev: "75 tỷ" },
              { year: 2025, count: "700 xe", rev: "85 tỷ" },
            ].map((d, i) => (
              <motion.div
                key={d.year}
                className="p-3 rounded-4 shadow text-center bg-light flex-fill"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h5>{d.year}</h5>
                <div className="fw-bold text-primary fs-5">{d.count}</div>
                <small>Doanh thu: {d.rev}</small>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Thành tựu */}
        <section className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-start">
                  <motion.img
                    src="/react-car-shop/images/sale1.png"
                    alt="Khách hàng"
                    className="img-fluid rounded-4 shadow img-sale"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <motion.img
                    src="/react-car-shop/images/sale2.png"
                    alt="Khách hàng"
                    className="img-fluid rounded-4 shadow img-sale"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="fw-bold">Doanh số 2024</h3>
                <p className="lead">
                  Chúng tôi đã bán hơn <strong>10.000 xe</strong> trong năm qua,
                  mở rộng khắp 20 tỉnh thành, đạt tỷ lệ hài lòng khách hàng 98%.
                </p>
                <ul>
                  <li>10 showroom trên toàn quốc</li>
                  <li>Dịch vụ hậu mãi tận tâm</li>
                  <li>Khuyến mãi hấp dẫn quanh năm</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Khách hàng */}
        <section className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-start">
                  <motion.img
                    src="/react-car-shop/images/cus1.png"
                    alt="Khách hàng"
                    className="img-fluid rounded-4 shadow img-sale"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <motion.img
                    src="/react-car-shop/images/cus5.png"
                    alt="Khách hàng"
                    className="img-fluid rounded-4 shadow img-sale"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 order-md-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="fw-bold">Khách hàng & Dịch vụ</h3>
                <p className="lead">
                  Hơn <strong>5000 khách hàng</strong> đã tin tưởng. Chúng tôi xây dựng
                  cộng đồng yêu xe năng động với nhiều ưu đãi đặc biệt.
                </p>
                <ul>
                  <li>Hỗ trợ tài chính linh hoạt</li>
                  <li>Bảo hành lên tới 5 năm</li>
                  <li>Sự kiện lái thử thường xuyên</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
