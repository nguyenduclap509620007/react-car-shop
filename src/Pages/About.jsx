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
          backgroundImage: "url('./images/banner-bg.png')", // Đổi đường dẫn ảnh nền tại đây
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1, // Có thể chỉnh độ mờ nếu muốn
        }}
      />
      {/* Nội dung chính */}
      <div
        className="container text-center my-5"
        style={{
          paddingTop: "70px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo cửa hàng */}
        <div className="mb-4">
          <img
            src="/images/logo1.png"
            alt="SuperCar Store Logo"
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "50%",
            }}
          />
        </div>

        <h2 className="mb-3">About SuperCar Store</h2>
        <p className="lead">
          <strong>SuperCar Store</strong> là showroom chuyên cung cấp các dòng{" "}
          <em>siêu xe thể thao</em> hàng đầu thế giới. Chúng tôi mang đến trải
          nghiệm mua sắm đẳng cấp, dịch vụ chuyên nghiệp và những chiếc xe
          chính hãng đến từ các thương hiệu danh giá như Ferrari, Lamborghini,
          Porsche và McLaren.
        </p>

        <ul className="list-unstyled mt-4">
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
