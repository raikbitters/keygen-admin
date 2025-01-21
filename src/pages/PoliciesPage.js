import React, { useState, useEffect } from 'react';
import { useLogout } from '../components/Logout';
import config from '../config';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const handleLogout = useLogout();
  const baseUrl = config.baseUrl;
  const accountId = localStorage.getItem('accountId');
  const endpoint = config.endpoints.policies(accountId);

  useEffect(() => {
    const fetchPolicies = async () => {
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
        setPolicies(payload.data);
      } catch (err) {
        if (err.message === 'HTTP error! status: 401') {
          console.error('Unauthorized request:', err);
          handleLogout();
        } else {
          console.error('Failed to fetch policies:', err);
        }
      }
    };
    fetchPolicies();
  }, [baseUrl, endpoint, handleLogout]);

  return (
    <div className='table-container'>
      <h1>Policies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Strict</th>
            <th>Floating</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy) => (
            <tr key={policy.id}>
              <td>{policy.id}</td>
              <td>{policy.attributes.name}</td>
              <td>{policy.attributes.duration}</td>
              <td>{policy.attributes.strict ? 'Yes' : 'No'}</td>
              <td>{policy.attributes.floating ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Policies;