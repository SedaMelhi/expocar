import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyCarsSvg from '../../assets/svg/sidebar/MyCarsSvg';
import AssetsSvg from '../../assets/svg/sidebar/AssetsSvg';
import BookingSvg from '../../assets/svg/sidebar/BookingSvg';
import ServicesSvg from '../../assets/svg/sidebar/ServicesSvg';
import HistorySvg from '../../assets/svg/sidebar/HistorySvg';
import MessagesSvg from '../../assets/svg/sidebar/MessagesSvg';
import SettingsSvg from '../../assets/svg/sidebar/SettingsSvg';
import HelpSvg from '../../assets/svg/HelpSvg';
import SignOutSvg from '../../assets/svg/SignOutSvg';

import './sidebar.sass';
import { setAuth } from '../../redux/authSlice/authSlice';

const Sidebar = ({ indexActiveEl }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(setAuth(''));
  };
  return (
    <div>
      <div className="sidebar">
        <div>
          <Link to="/" className={`sidebar__link ${indexActiveEl === 0 && 'sidebar__link_active'}`}>
            <MyCarsSvg active={indexActiveEl === 0 && true} />
            <span>My cars</span>
          </Link>
          <Link to="/" className={`sidebar__link ${indexActiveEl === 1 && 'sidebar__link_active'}`}>
            <AssetsSvg active={indexActiveEl === 1 && true} />
            <span>Assets</span>
          </Link>
          <Link to="/" className={`sidebar__link ${indexActiveEl === 2 && 'sidebar__link_active'}`}>
            <BookingSvg active={indexActiveEl === 2 && true} />
            <span>Booking</span>
          </Link>
          <Link to="/" className={`sidebar__link ${indexActiveEl === 3 && 'sidebar__link_active'}`}>
            <ServicesSvg active={indexActiveEl === 3 && true} />
            <span>Services</span>
          </Link>
          <Link to="/" className={`sidebar__link ${indexActiveEl === 4 && 'sidebar__link_active'}`}>
            <HistorySvg active={indexActiveEl === 4 && true} />
            <span>History</span>
          </Link>
          <Link
            to="/chats"
            className={`sidebar__link ${indexActiveEl === 5 && 'sidebar__link_active'}`}>
            <MessagesSvg active={indexActiveEl === 5 && true} />
            <span>Messages</span>
            <img src="images/green-dot.svg" alt="Message notification" />
          </Link>
          <Link
            to="/settings"
            className={`sidebar__link ${indexActiveEl === 6 && 'sidebar__link_active'}`}>
            <SettingsSvg active={indexActiveEl === 6 && true} />
            <span>Settings</span>
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className={`sidebar__link sidebar__link_margin ${
              indexActiveEl === 7 && 'sidebar__link_active'
            }`}>
            <HelpSvg active={indexActiveEl === 7 && true} />
            <span>Help & Supprot</span>
          </Link>
          <div onClick={handleSignOut}>
            <Link to="/authorization" className={`sidebar__link ${indexActiveEl === 6}`}>
              <SignOutSvg />
              <span>Sign out</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebarMobile">
        <Link to="/">
          <MyCarsSvg active={indexActiveEl === 0 && true} />
        </Link>
        <Link to="/">
          <AssetsSvg active={indexActiveEl === 1 && true} />
        </Link>
        <Link to="/">
          <BookingSvg active={indexActiveEl === 2 && true} />
        </Link>
        <Link to="/">
          <ServicesSvg active={indexActiveEl === 3 && true} />
        </Link>
        <Link to="/">
          <HistorySvg active={indexActiveEl === 4 && true} />
        </Link>
        <Link to="/chats">
          <MessagesSvg active={indexActiveEl === 5 && true} />
        </Link>
        <Link to="/settings">
          <SettingsSvg active={indexActiveEl === 6 && true} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
