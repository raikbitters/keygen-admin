import { Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header  from './Header';

const BaseLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <Outlet />
    </ProtectedRoute>
  );
}

export default BaseLayout;
