// App.jsx
import { Routes, Route } from "react-router-dom"; // 👈 chỉ import Routes, Route

// 📝 Kiểm tra tên thư mục Component/Pages trên máy bạn có đúng chữ hoa chữ thường không
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * App.jsx – component chính của ứng dụng.
 * - Navbar + Footer hiển thị ở mọi trang.
 * - Routes chứa các trang Home, Cars, About, Contact.
 */
export default function App() {
  return (
    <>
      {/* Thanh điều hướng */}
      <Navbar />

      {/* Nội dung các trang */}
      <main className="my-4" style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Chân trang */}
      <Footer />
    </>
  );
}
