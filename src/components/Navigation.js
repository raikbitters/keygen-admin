import { Link } from 'react-router-dom';

const Navigation = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  }
  return (
    <nav>
      {!isAuthenticated()}
      {isAuthenticated() && (
        <div>
          <Link to="/products">Products </Link>
          <Link to="/policies">Policies </Link>
          <Link to="/licenses">Licenses </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;