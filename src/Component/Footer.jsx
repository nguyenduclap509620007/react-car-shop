export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F5F5F5" }}>
      <div className="row">
        <div className="col-lg-4 p-4">
          <h4>CỬA HÀNG XE SUPER-SPORT THÀNH PHỐ HỒ CHÍ MINH</h4>
          <p style={{ lineHeight: 2.1 }}>
            <i className="bi bi-geo-alt"></i> Số 40 C1, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh
            <br />
            <i className="bi bi-telephone-inbound-fill"></i> (028) 38.256.713 - (028) 38.225.340 - (028) 38.296.764
            <br />
            <a
              style={{ color: "rgb(8, 8, 8)", textDecoration: "none" }}
              href="http://mail.google.com/mail/?view=cm&fs=1&to=super-sport.com.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-envelope-fill"></i> Super-Sport.com.vn
            </a>
          </p>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.411829111801!2d106.63165384009393!3d10.803426057065462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294558dec8ed%3A0x342a19e08150223d!2zUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1757390364553!5m2!1sen!2s"
            width="400"
            height="200"
            style={{ border: 0 , borderRadius: "25px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="col-lg-4 p-4">
          <h4>VỀ CỬA HÀNG</h4>
          <ul>
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
        <div className="col-lg-4 p-4">
          <h4>HỖ TRỢ</h4>
          <ul>
            <li>Hotline: (028) 38 256 713</li>
            <li><a href="#">Khắc phục lỗi không hiển thị sản phẩm</a></li>
            <li><a href="#">Hướng dẫn mua sản phẩm</a></li>
            <li><a href="#">Hướng dẫn liên hệ nhân viên</a></li>
            <li><a href="#">Quy định sử dụng web mua bán</a></li>
          </ul>
          <img src="/images/logo1.png" alt="" className=" w-100 h-50 shadow-lg rounded-5" />
        </div>
      </div>
    </footer>
  );
}
