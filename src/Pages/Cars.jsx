import { useMemo, useState } from "react";
import CarCard from "../Component/CarCard";

const ALL_CARS = [
  { id: 1, name: "Toyota Supra", price: 52000, type: "sport", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1600&auto=format&fit=crop", desc: "Sport 2 cửa, turbo." },
  { id: 2, name: "Ford Mustang", price: 61000, type: "sport", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop", desc: "Cơ bắp Mỹ." },
  { id: 3, name: "Lamborghini Urus", price: 230000, type: "suv", image: "https://images.unsplash.com/photo-1606665144661-90c6cc0a7e1b?q=80&w=1600&auto=format&fit=crop", desc: "SUV siêu sang, siêu mạnh." },
  { id: 4, name: "BMW X5", price: 78000, type: "suv", image: "https://images.unsplash.com/photo-1671126399285-7058704d5563?q=80&w=1600&auto=format&fit=crop", desc: "SUV cao cấp." },
  { id: 5, name: "Mercedes S-Class", price: 155000, type: "sedan", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=1600&auto=format&fit=crop", desc: "Sedan hạng sang." },
  { id: 6, name: "Toyota Camry", price: 39000, type: "sedan", image: "https://images.unsplash.com/photo-1616077168079-7f3c4e4d7a73?q=80&w=1600&auto=format&fit=crop", desc: "Sedan bền bỉ, tiết kiệm." },
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
    <div className="container">
      <h2 className="my-3">All Cars</h2>

      {/* Filter bar */}
      <div className="row g-3 mb-3">
        <div className="col-12 col-md-4">
          <input value={q} onChange={e => setQ(e.target.value)} className="form-control" placeholder="Search by name..." />
        </div>
        <div className="col-6 col-md-4">
          <select value={type} onChange={e => setType(e.target.value)} className="form-select">
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
      </div>

      {/* Grid */}
      <div className="row g-4">
        {filtered.map(c => (
          <div key={c.id} className="col-12 col-sm-6 col-lg-4">
            <CarCard car={c} onBuy={handleBuy} />
          </div>
        ))}
        {filtered.length === 0 && <p className="text-muted">Không tìm thấy xe phù hợp.</p>}
      </div>
    </div>
  );
}
