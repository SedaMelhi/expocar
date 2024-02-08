import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
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
        <div className="login">
          <Link to="/" className="secondaryBtn">
            Log in
          </Link>
          <select className="headerSelect" name="" id="">
            <option value="En">En</option>
          </select>
        </div>
      </header>

      <header className="headerMobile">
        <nav className="headerMobile__nav">
          <Link to="/" className="headerMobile__logo">
            <img className="headerMobile__firstImg" src="images/logo-1.svg" alt="Logo" />
            <img className="headerMobile__secondImg" src="images/logo-2.svg" alt="Logo" />
          </Link>
          <div className="account">
            <div className="login">
              <Link to="/" className="secondaryBtn">
                Log in
              </Link>
              <select className="headerSelect" name="" id="">
                <option value="En">En</option>
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
