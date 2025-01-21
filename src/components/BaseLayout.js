import { Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import Sidebar from './Sidebar';

const BaseLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <div className="layout">
        <aside>
        <Sidebar />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}

export default BaseLayout;
