import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { STRINGS } from '../helpers/strings';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{STRINGS.header.title}</h1>
        </div>
        <nav className="navbar">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            {STRINGS.header.nav.profile}
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            {STRINGS.header.nav.contact}
          </Link>
          <Link to="/education" className={`nav-link ${isActive('/education')}`}>
            {STRINGS.header.nav.education}
          </Link>
          <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>
            {STRINGS.header.nav.experience}
          </Link>
          <Link to="/skills" className={`nav-link ${isActive('/skills')}`}>
            {STRINGS.header.nav.skills}
          </Link>
          <Link to="/documents" className={`nav-link ${isActive('/documents')}`}>
            {STRINGS.header.nav.documents}
          </Link>
          <Link to="/images" className={`nav-link ${isActive('/images')}`}>
            {STRINGS.header.nav.images}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

