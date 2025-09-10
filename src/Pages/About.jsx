export default function About() {
  return (
    <div style={{ position: "relative", minHeight: "80vh" }}>
      {/* Ảnh nền cho phần About */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage: "url('./images/banner-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />
      {/* Nội dung chính */}
      <div
        className="container text-center my-5 py-4 px-2 px-md-5"
        style={{
          paddingTop: "70px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo cửa hàng */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src="/images/logo1.png"
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
          />
        </div>

        <h2 className="mb-3 fs-2 fs-md-1">About SuperCar Store</h2>
        <p className="lead fs-6 fs-md-5">
          <strong>SuperCar Store</strong> là showroom chuyên cung cấp các dòng{" "}
          <em>siêu xe thể thao</em> hàng đầu thế giới. Chúng tôi mang đến trải
          nghiệm mua sắm đẳng cấp, dịch vụ chuyên nghiệp và những chiếc xe
          chính hãng đến từ các thương hiệu danh giá như Ferrari, Lamborghini,
          Porsche và McLaren.
        </p>

        <ul
          className="list-unstyled mt-4 text-start text-md-center mx-auto"
          style={{ maxWidth: 500 }}
        >
          <li>🏎️ Phân phối siêu xe thể thao chính hãng</li>
          <li>💳 Hỗ trợ tài chính & trả góp linh hoạt</li>
          <li>🛠️ Bảo hành chính hãng 5 năm</li>
          <li>🚨 Dịch vụ cứu hộ & hỗ trợ 24/7</li>
          <li>📍 Showroom: 123 Đường Nguyễn Văn A, Quận 1, TP.HCM</li>
          <li>📞 Hotline: 0909 123 456</li>
          <li>📧 Email: contact@supercarstore.vn</li>
        </ul>
      </div>
    </div>
  );
}
