import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#F5F5F5",
        border: "2px solid #eee",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000
      }}
    >
      <div className="container">
        <img src="./images/logo1.png" alt="" style={{ height: 50, width: 50, borderRadius: "50%", marginRight: 10 }} />
        <Link className="navbar-brand fw-bold" to="/">SPORT-CARS</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-end ">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cars" className="nav-link">Cars</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
