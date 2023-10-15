import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="images/logo-1.svg" alt="Logo" />
          <img src="images/logo-2.svg" alt="Logo" />
        </Link>
        <div className="menu">
          <Link to="/" className="menu__link">
            About us
          </Link>
          <Link to="/" className="menu__link">
            Features
          </Link>
          <Link to="/" className="menu__link">
            Tokens
          </Link>
        </div>
      </nav>
      <div className="account">
        <div className="account__notification">
          <img src="images/notification.svg" alt="Notification icon" />
          <img
            className="account__notificationDot"
            src="images/notification-dot.svg"
            alt="Notification icon"
          />
        </div>
        <div className="account__inner">
          <Link to="/" className="account__profilePicture">
            <img src="images/pp.png" alt="Profile pictire" />
          </Link>
          <div className="account__userInfo">
            <div className="account__userName">Magomed Aliev</div>
            <div className="account__userLicenseId">Driving license ID: 11222343086</div>
          </div>
        </div>
        <select className="headerSelect" name="" id="">
          <option value="En">En</option>
        </select>
      </div>
    </header>
  );
};

export default Nav;
