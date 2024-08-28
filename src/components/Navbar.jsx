
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create and style in a CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/courses">Courses ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="/courses/web-dev">Web Development</Link></li>
            <li><Link to="/courses/data-science">Data Science</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/jobs">Jobs ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="/jobs/tech">Tech Jobs</Link></li>
            <li><Link to="/jobs/non-tech">Non-Tech Jobs</Link></li>
          </ul>
        </li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
