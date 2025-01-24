import { Navigate } from 'react-router-dom';

const RootRoute = () => {
  const token = localStorage.getItem('token');
  return <Navigate to={token !== null ? '/products' : '/login'} />;
};

export default RootRoute;