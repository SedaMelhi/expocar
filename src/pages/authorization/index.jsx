import { Link } from 'react-router-dom';
import './authorisation.sass';
import Footer from './footer/footer';
import Nav from './nav/nav';

const Authorization = () => {
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Log in</h1>
            <p className="registration__subtitle">Please authorize to start using the platform</p>
          </div>
          <form action="">
            <div className="formInner">
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
                <label htmlFor="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="psw"
                  id="psw"
                  required
                />
              </div>

              <div className="remember_forgot_row">
                <div className="checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Remember me</label>
                </div>
                <Link to="password">Forgot password?</Link>
              </div>

              <button type="submit" className="primaryBtn">
                Log in
              </button>

              <p href="#" className="registration__link">
                Don’t have an account? <Link to="/registration">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authorization;
