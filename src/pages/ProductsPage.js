import React, { useState, useEffect } from 'react';
import { useLogout } from '../components/Logout';
import config from '../config';

const Products = () => {
  const [products, setProducts] = useState([]);
  const handleLogout = useLogout();
  const baseUrl = config.baseUrl;
  const endpoint = config.endpoints.products(config.account);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const payload = await response.json();
        setProducts(payload.data);
      } catch (err) {
        if (err.message === 'HTTP error! status: 401') {
          console.error('Unauthorized request:', err);
          handleLogout();
        } else {
          console.error('Failed to fetch products:', err);
        }
      }
    };
    fetchProducts();
  }, [baseUrl, endpoint, handleLogout]);

  return (
    <div className="table-container">
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Distribution Strategy</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.attributes.name}</td>
              <td>{product.attributes.distributionStrategy}</td>
              <td>{product.attributes.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;