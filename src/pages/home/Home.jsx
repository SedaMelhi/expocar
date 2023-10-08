import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav';

const Home = () => {
  return (
    <div>
      <Nav />
      Главная страницы
      <Link to="/settings">Настройки</Link>
    </div>
  );
};
export default Home;
