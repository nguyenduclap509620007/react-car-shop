import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";


export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavLinkClick = () => {
    const nav = document.getElementById("mainNav");
    if (nav && window.innerWidth < 992) {
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Bạn tìm: ${searchText}`);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
        style={{
          borderBottom: "2px solid #eee",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={handleNavLinkClick}
          >
            <img
              src="/react-car-shop/images/logo1.png"
              alt="logo"
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
            <span className="fw-bold text-dark">SPORT-CARS</span>
          </Link>

          {/* Nút toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            {/* Menu */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center text-end">
              <li className="nav-item ">
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    "nav-link nav-icon-link" + (isActive ? " active-link" : "")
                  }
                  onClick={handleNavLinkClick}
                >

                  Home <i className="bi bi-house-fill m-1"></i>

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    "nav-link nav-icon-link" + (isActive ? " active-link" : "")
                  }
                  onClick={handleNavLinkClick}
                >

                  Cars <i className="bi bi-car-front m-1"></i>

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link nav-icon-link" + (isActive ? " active-link" : "")
                  }
                  onClick={handleNavLinkClick}
                >

                  About <i className="bi bi-journal-text m-1"></i>

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link nav-icon-link" + (isActive ? " active-link" : "")
                  }
                  onClick={handleNavLinkClick}
                >

                  Contact <i className="bi bi-envelope m-1"></i>

                </NavLink>
              </li>

              {/* Ô tìm kiếm bản desktop */}
              <li className="nav-item ms-lg-3 d-none d-lg-block">
                <form
                  className="d-flex"
                  onSubmit={handleSearchSubmit}
                  style={{ alignItems: "center" }}
                >
                  <input
                    className="form-control form-control-sm me-2 rounded-3"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{
                      maxWidth: 180,
                      boxShadow: "0 0 3px rgba(0,0,0,0.1)",
                    }}
                  />
                  <button
                    className="btn btn-sm rounded-3"
                    style={{ backgroundColor: "#ff9900ff", color: "#040000ff" }}
                    type="submit"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Thanh thông tin dưới navbar (ẩn trên mobile) */}
      <div
        className="top-info-bar d-none d-lg-flex justify-content-around align-items-center py-3">
        <div>
          <i className="bi bi-geo-alt-fill me-2"></i> Location
        </div>
        <div>
          <i className="bi bi-telephone-fill me-2"></i> (+71) 8522369417
        </div>
        <div>
          <i className="bi bi-envelope-fill me-2"></i> demo@gmail.com
        </div>
      </div>


      {/* Ô tìm kiếm bản mobile (nằm dưới navbar) */}
      <div
        className="d-block d-lg-none pb-2 px-3 shadow-sm mt-2"
        style={{
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <form
          className="d-flex"
          onSubmit={handleSearchSubmit}
          style={{ alignItems: "center" }}
        >
          <input
            className="form-control form-control-sm me-2 rounded-3"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              flex: 1,
              boxShadow: "0 0 3px rgba(0,0,0,0.1)",
            }}
          />
          <button
            className="btn btn-sm rounded-3"
            type="submit"
            style={{ backgroundColor: "#ff9900ff", color: "#040000ff" }}
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}
