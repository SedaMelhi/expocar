import { Link } from 'react-router-dom';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './settings.sass';

const Settings = () => {
  const pathImage = 'images/pp.png';
  return (
    <div>
      <Nav />
      <div className="flex margin">
        <Sidebar indexActiveEl={6} />
        <div className="leftContent">
          <section className="alert">
            <div className="alert__text">
              <img src="images/alert-circle.svg" alt="Alert circle icon" />
              <span>
                Your account is currently not verified, please provide us with additional
                information to start using the platform
              </span>
            </div>
            <img className="alert__closeIcon" src="images/close.svg" alt="Close icon" />
          </section>

          <section className="registration margin-none">
            <div className="registration__wrapper">
              <div className="registration__userRow">
                <div className="registration__userInfo">
                  <div className="registration__userProfilePicture">
                    <img src={pathImage} alt="" />
                  </div>
                  <div className="registration__userWrapper">
                    <p className="registration__userName">Magomed Aliev</p>
                    <div className="registration__verificationStatus">
                      <span>Not verified</span>
                      <img src="images/close-circle.svg" alt="Close circle icon" />
                    </div>
                  </div>
                </div>
                <Link to="/" className="secondaryBtn btn_hidden secondaryBtn_hidden">
                  Edit avatar
                </Link>
              </div>
              <form action="">
                <div className="formInner">
                  <div className="inputbox">
                    <label htmlFor="name">Full name (as in passport)</label>
                    <input type="text" placeholder="Magomed Aliev" name="name" id="name" required />
                  </div>

                  <div className="inputbox">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      placeholder="emailexample@gmail.com"
                      name="email"
                      id="email"
                      required
                    />
                  </div>

                  <div className="inputbox">
                    <label htmlFor="address">Location (City, Country)</label>
                    <input
                      type="address"
                      placeholder="Enter your address"
                      name="address"
                      id="address"
                      required
                    />
                  </div>

                  <div className="inputbox">
                    <label htmlFor="psw">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="psw"
                      id="psw"
                      required
                    />
                  </div>

                  <div className="inputbox">
                    <label htmlFor="confirm_psw">Confirm password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="confirm_psw"
                      id="confirm_psw"
                      required
                    />
                  </div>

                  <div className="verification">
                    <div className="verification__text">
                      <span>Verification</span>
                      <p>
                        Your account is currently not verified, please provide us with additional
                        information to start
                      </p>
                    </div>
                    <Link to="/" className="secondaryBtn secondaryBtn_lg">
                      {' '}
                      Verify account{' '}
                    </Link>
                  </div>

                  <div className="notification">
                    <div className="toggleSwitchContainer">
                      <label className="toggleSwitch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="notification__text">
                      <span>Notifications</span>
                      <p>
                        Your account is currently not verified, please provide us with additional
                        information
                      </p>
                    </div>
                  </div>

                  <button type="submit" className="primaryBtn">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Settings;
