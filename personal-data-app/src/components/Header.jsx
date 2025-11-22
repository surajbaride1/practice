import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Personal Data Manager</h1>
        </div>
        <nav className="navbar">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Profile
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            Contact Info
          </Link>
          <Link to="/education" className={`nav-link ${isActive('/education')}`}>
            Education
          </Link>
          <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>
            Work Experience
          </Link>
          <Link to="/skills" className={`nav-link ${isActive('/skills')}`}>
            Skills
          </Link>
          <Link to="/documents" className={`nav-link ${isActive('/documents')}`}>
            Documents
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

