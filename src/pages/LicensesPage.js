import React, { useState, useEffect } from 'react';
import { useLogout } from '../components/Logout';
import config from '../config';

const Licenses = () => {
  const [licenses, setLicenses] = useState([]);
  const handleLogout = useLogout();
  const baseUrl = config.baseUrl;
  const accountId = localStorage.getItem('accountId');
  const endpoint = config.endpoints.licenses(accountId);

  useEffect(() => {
    const fetchLicenses = async () => {
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
        setLicenses(payload.data);
      } catch (err) {
        if (err.message === 'HTTP error! status: 401') {
          console.error('Unauthorized request:', err);
          handleLogout();
        } else {
          console.error('Failed to fetch licenses:', err);
        }
      }
    };
    fetchLicenses();
  }, [baseUrl, endpoint, handleLogout]);

  return (
    <div className='table-container'>
      <h1>Licenses</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license) => (
            <tr key={license.id}>
              <td>{license.attributes.name}</td>
              <td>{license.attributes.key}</td>
              <td>{license.attributes.expiry}</td>
              <td>{license.attributes.status}</td>
              <td>{license.attributes.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Licenses;