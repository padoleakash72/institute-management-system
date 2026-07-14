import "./Navbar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar-container">

      <div className="navbar-title">
        Dashboard
      </div>

      <div className="navbar-right">

        <input
          type="text"
          className="search-box"
          placeholder="Search..."
        />

        <FaBell className="nav-icon" />

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <span>Admin</span>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;