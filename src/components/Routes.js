import { Route, Routes } from 'react-router-dom';
import RootRoute from './RootRoute';
import BaseLayout from './BaseLayout.js';
import Login from '../pages/LoginPage';
import Products from '../pages/ProductsPage';
import Policies from '../pages/PoliciesPage';
import Licenses from '../pages/LicensesPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />
      <Route path="/login" element={<Login />} />
      <Route element={<BaseLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/licenses" element={<Licenses />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;