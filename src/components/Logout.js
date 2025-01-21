import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return handleLogout;
};

const Logout = () => {
  const handleLogout = useLogout();

  return (
    <button className='logout-button' onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;