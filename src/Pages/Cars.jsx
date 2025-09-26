import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCard from "../Component/CarCard";
import "./Cars.css"; // 👉 import CSS riêng
import CarouselHero from "../Component/Carousel";

const ALL_CARS = [
  { id: 1, name: "Chevrolet Camaro", price: 26.100, type: "sport", image: "/react-car-shop/images/chevroletcamaro.png", desc: "Sport 2 cửa, turbo." },
  { id: 2, name: "Mazda MX-5 Miata 2023", price: 28.050, type: "sport", image: "/react-car-shop/images/MazdaMX-5Miata2023.png", desc: "Cơ bắp Mỹ." },
  { id: 3, name: "Toyota GR 86", price: 28.400, type: "suv", image: "/react-car-shop/images/ToyotaGR86.png", desc: "SUV siêu sang, siêu mạnh." },
  { id: 4, name: "Subaru BRZ", price: 28.595, type: "suv", image: "/react-car-shop/images/SubaruBRZ.png", desc: "SUV cao cấp." },
  { id: 5, name: "Dodge Challenger", price: 31.100, type: "sedan", image: "/react-car-shop/images/DodgeChallenger.png", desc: "Sedan hạng sang." },
  { id: 6, name: "BMW 230i Coupe", price: 38.200, type: "sedan", image: "/react-car-shop/images/BMW230iCoupe.png", desc: "Sedan bền bỉ, tiết kiệm." },
  { id: 7, name: "Nissan Z", price: 40.990, type: "suv", image: "/react-car-shop/images/NissanZ.png", desc: "SUV siêu sang, siêu mạnh." },
  { id: 8, name: "Toyota GR Supra", price: 44.040, type: "suv", image: "/react-car-shop/images/ToyotaGRSupra.png", desc: "SUV cao cấp." },
  { id: 9, name: "Audi TT Coupe", price: 52.000, type: "sedan", image: "/react-car-shop/images/AudiTTCoupe.png", desc: "Sedan hạng sang." },
  { id: 10, name: "BMW Z4", price: 52.800, type: "sedan", image: "/react-car-shop/images/BMWZ4.png", desc: "Sedan bền bỉ, tiết kiệm." },
  { id: 11, name: "Audi TT Coupe", price: 52.000, type: "sedan", image: "/react-car-shop/images/AudiTTCoupe.png", desc: "Sedan hạng sang." },
  { id: 12, name: "BMW Z4", price: 52.800, type: "sedan", image: "/react-car-shop/images/BMWZ4.png", desc: "Sedan bền bỉ, tiết kiệm." },
];

export default function Cars() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    return ALL_CARS.filter(c => {
      const matchName = c.name.toLowerCase().includes(q.toLowerCase());
      const matchType = type === "all" ? true : c.type === type;
      const matchPrice = maxPrice ? c.price <= Number(maxPrice) : true;
      return matchName && matchType && matchPrice;
    });
  }, [q, type, maxPrice]);

  const handleBuy = (car) => alert(`Bạn đã chọn mua: ${car.name}`);

  return (
    <div className="cars-page">
      {/* Ảnh nền cho phần Cars */}
      <div className="cars-bg" />

      {/* Nội dung chính */}
      <div className="container px-2 px-md-5 cars-content">
        {/* Hero */}
        <CarouselHero />

        <motion.h2
          className="cars-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          All Cars
        </motion.h2>

        {/* Filter bar */}
        <motion.div
          className="row g-3 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="col-12 col-md-4">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              className="form-control"
              placeholder="Search by name..."
            />
          </div>
          <div className="col-6 col-md-4">
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="form-select"
            >
              <option value="all">All types</option>
              <option value="sport">Sport</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
            </select>
          </div>
          <div className="col-6 col-md-4">
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="form-control"
              placeholder="Max price (USD)"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                className="col-12 col-sm-6 col-lg-4"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CarCard car={c} onBuy={handleBuy} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              className="text-muted text-center w-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Không tìm thấy xe phù hợp.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
