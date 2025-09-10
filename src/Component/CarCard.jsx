import { p } from "framer-motion/client";

export default function CarCard({ car, onBuy }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={car.image} className="card-img-top" alt={car.name} style={{ height: 180, objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text text-muted small flex-grow-1">{car.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">${car.price.toLocaleString()}</span>
          <button className="btn btn-sm btn-primary" onClick={() => onBuy?.(car)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
