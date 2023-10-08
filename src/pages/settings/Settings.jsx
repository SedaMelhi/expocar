import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav';

const Settings = () => {
  return (
    <div>
      <Nav />
      Страница настроек
      <Link to="/" className="link">
        Главная страница
      </Link>
    </div>
  );
};
export default Settings;
