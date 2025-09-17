export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.85)",
        borderTop: "2px solid #eee",
        marginTop: "20px",
        position: "relative",
        zIndex: 1,
        backgroundImage: "url('./images/banner-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backdropFilter: "blur(4px)"
      }}
    >
      <div className="container py-4">
        <div className="row gy-4 align-items-start">
          <div className="col-12 col-lg-4">
            <h4 className="fw-bold text-center text-lg-start mb-3">
              CỬA HÀNG XE SUPER-SPORT THÀNH PHỐ HỒ CHÍ MINH
            </h4>
            <p className="mb-2 text-center text-lg-start" style={{ lineHeight: 2.1 }}>
              <i className="bi bi-geo-alt"></i> Số 40 C1, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh<br />
              <i className="bi bi-telephone-inbound-fill"></i> (028) 38.256.713 - (028) 38.225.340 - (028) 38.296.764<br />
              <a
                style={{ color: "rgb(8, 8, 8)", textDecoration: "none" }}
                href="http://mail.google.com/mail/?view=cm&fs=1&to=super-sport.com.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope-fill"></i> Super-Sport.com.vn
              </a>
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.411829111801!2d106.63165384009393!3d10.803426057065462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294558dec8ed%3A0x342a19e08150223d!2zUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1757390364553!5m2!1sen!2s"
                width="100%"
                height="160"
                style={{ border: 0, borderRadius: "18px", minWidth: 0, maxWidth: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="fw-bold text-center mb-3">VỀ CỬA HÀNG</h4>
            <ul className="list-unstyled text-center">
              <li>Email: super-sport.com.vn</li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tin tức</a></li>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Đăng ký</a></li>
              <li><a href="#">Quên mật khẩu</a></li>
              <li><a href="#">Tài khoản</a></li>
              <li><a href="#">Nạp số dư</a></li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
            <h4 className="fw-bold text-center mb-3">HỖ TRỢ</h4>
            <ul className="list-unstyled text-center ">
              <li>Hotline: (028) 38 256 713</li>
              <li><a href="#">Khắc phục lỗi không hiển thị sản phẩm</a></li>
              <li><a href="#">Hướng dẫn mua sản phẩm</a></li>
              <li><a href="#">Hướng dẫn liên hệ nhân viên</a></li>
              <li><a href="#">Quy định sử dụng web mua bán</a></li>
            </ul>
            <img
              src="/react-car-shop/images/logo1.png"
              alt=""
              className="shadow-lg img-fluid mt-3 rounded-circle"
              style={{ maxWidth: 200, height: "auto", padding: 10, borderRadius: "50%", background: "#fff" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
