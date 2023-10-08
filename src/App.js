import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
