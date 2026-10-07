import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>⚕️</span>
        <div>
          <h2>MediCare<span>+</span></h2>
          <small>Healthcare Solutions</small>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/services">Services</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="admin-btn">👤 Doctor Admin</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">🔑 Login</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;