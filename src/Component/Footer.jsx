export default function Footer() {
  return (
    <footer style={{backgroundColor: "#F5F5F5" }}>
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
          <img src="./images/logo1.png" alt="" className="rounded-circle w-25 shadow-lg" />
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
        </div>
      </div>
    </footer>
  );
}     
