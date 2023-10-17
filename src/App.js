import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Authorization from './pages/authorization';
import Password from './pages/authorization/password/password';
import Registration from './pages/authorization/registration/Registration.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Chats from './pages/chats/Chats';
import Car from './pages/car/Car';
const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);
  useEffect(() => {
    if (auth) {
      localStorage.setItem('auth', JSON.stringify(auth));
    }
  }, [auth]);
  return (
    <div>
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/registration" />} />
        <Route path="/car" element={auth ? <Car /> : <Navigate to="/registration" />} />
        <Route path="/chats" element={auth ? <Chats /> : <Navigate to="/registration" />} />
        <Route path="/settings" element={auth ? <Settings /> : <Navigate to="/registration" />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/authorization/password" element={<Password />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
