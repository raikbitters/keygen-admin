import { Link } from 'react-router-dom';

const Navigation = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  }
  return (
    <nav>
      {isAuthenticated() && (
        <ul className="nav-links">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/policies">Policies</Link></li>
          <li><Link to="/licenses">Licenses</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;