import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/About";  
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm dòng này nếu dùng Bootstrap

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
