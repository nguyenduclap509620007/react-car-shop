import CarouselHero from "../Component/Carousel";
import CarCard from "../Component/CarCard";

const featured = [
  { id: 1, name: "Toyota Supra", price: 52000, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1600&auto=format&fit=crop", desc: "Sport 2 cửa, động cơ turbo." },
  { id: 2, name: "Ford Mustang", price: 61000, image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop", desc: "Huyền thoại cơ bắp Mỹ." },
  { id: 3, name: "Mercedes S-Class", price: 155000, image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=1600&auto=format&fit=crop", desc: "Sedan sang trọng, êm ái." }
];

export default function Home() {
  const handleBuy = (car) => alert(`Bạn đã chọn mua: ${car.name}`);

  return (
    <div className="mt-3">
      <CarouselHero />

      <section className="container mt-5">
        <h2 className="mb-3">Featured Cars</h2>
        <div className="row g-4">
          {featured.map(c => (
            <div key={c.id} className="col-12 col-sm-6 col-lg-4">
              <CarCard car={c} onBuy={handleBuy} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
