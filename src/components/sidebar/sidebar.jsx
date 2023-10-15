import { Link } from 'react-router-dom';

import MyCarsSvg from '../../assets/svg/sidebar/MyCarsSvg';
import AssetsSvg from '../../assets/svg/sidebar/AssetsSvg';
import BookingSvg from '../../assets/svg/sidebar/BookingSvg';
import ServicesSvg from '../../assets/svg/sidebar/ServicesSvg';
import HistorySvg from '../../assets/svg/sidebar/HistorySvg';
import MessagesSvg from '../../assets/svg/sidebar/MessagesSvg';
import SettingsSvg from '../../assets/svg/sidebar/SettingsSvg';

import HelpSvg from '../../assets/svg/HelpSvg';
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <a href="index2.html" className="sidebar__link sidebar__link_active">
          <MyCarsSvg active={true} />
          <span>My cars</span>
        </a>
        <Link to="/" className="sidebar__link">
          <AssetsSvg />
          <span>Assets</span>
        </Link>
        <Link to="/" className="sidebar__link">
          <BookingSvg />
          <span>Booking</span>
        </Link>
        <Link to="/" className="sidebar__link">
          <ServicesSvg />
          <span>Services</span>
        </Link>
        <Link to="/" className="sidebar__link">
          <HistorySvg />
          <span>History</span>
        </Link>
        <a href="index3.html" className="sidebar__link">
          <MessagesSvg />
          <span>Messages</span>
          <img src="images/green-dot.svg" alt="Message notification" />
        </a>
        <a href="index4.html" className="sidebar__link">
          <SettingsSvg />
          <span>Settings</span>
        </a>
        <Link to="/" className="sidebar__link sidebar__link_margin">
          <HelpSvg />
          <span>Help & Supprot</span>
        </Link>
      </div>

      <div className="sidebarMobile">
        <a href="index2.html">
          <MyCarsSvg active={true} />
        </a>
        <Link to="/">
          <AssetsSvg />
        </Link>
        <Link to="/">
          <BookingSvg />
        </Link>
        <Link to="/">
          <ServicesSvg />
        </Link>
        <Link to="/">
          <HistorySvg />
        </Link>
        <a href="index3.html">
          <MessagesSvg />
        </a>
        <a href="index4.html">
          <SettingsSvg />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
