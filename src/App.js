import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
