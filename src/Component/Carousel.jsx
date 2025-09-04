export default function CarouselHero() {
  return (
    <div id="hero" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#hero" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#hero" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner rounded-4 shadow-sm">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100" alt="Sport Car"
            style={{ maxHeight: 420, objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Super Sport</h5>
            <p>Hiệu năng đỉnh cao cho người đam mê tốc độ.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1519843480059-00f6140b8e8d?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100" alt="SUV"
            style={{ maxHeight: 420, objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>SUV Gia đình</h5>
            <p>Rộng rãi – An toàn – Tiện nghi cho mọi chuyến đi.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100" alt="Sedan"
            style={{ maxHeight: 420, objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sedan Hạng sang</h5>
            <p>Thanh lịch – Tinh tế – Đẳng cấp.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
