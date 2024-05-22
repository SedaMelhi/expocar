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

//Нужен токен, чтобы при переходе на страницу получать с сервера данные пользователя

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const isRemember = useSelector((state) => state.auth.isRemember);
  useEffect(() => {
    if (isRemember) {
      localStorage.setItem('auth', JSON.stringify(auth));
    } else {
      sessionStorage.setItem('auth', JSON.stringify(auth));
    }
    if (auth === '') {
      localStorage.setItem('auth', JSON.stringify(auth));
      sessionStorage.setItem('auth', JSON.stringify(auth));
    }
    localStorage.setItem('isRemember', JSON.stringify(isRemember));
  }, [auth, isRemember]);
  return (
    <Routes>
      <Route path="/" element={auth ? <Home /> : <Navigate to="/authorization" />} />
      <Route path="/car" element={auth ? <Car /> : <Navigate to="/authorization" />} />
      <Route path="/chats" element={auth ? <Chats /> : <Navigate to="/authorization" />} />
      <Route path="/settings" element={auth ? <Settings /> : <Navigate to="/authorization" />} />
      <Route path="/authorization" element={!auth ? <Authorization /> : <Navigate to="/" />} />
      <Route path="/authorization/password" element={!auth ? <Password /> : <Navigate to="/" />} />
      <Route path="/registration" element={!auth ? <Registration /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
