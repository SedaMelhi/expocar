import { Link } from 'react-router-dom';

import Footer from './footer/footer';
import Nav from './nav/nav';

import './authorisation.sass';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../api/auth';
import { setAuth } from '../../redux/authSlice/authSlice';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    console.log({ email, password });
    auth('/auth-token/', { email, password })
      .then((res) => console.log(res))
      .catch((res) => setError(res.response.data.error));
  };
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Log in</h1>
            <p className="registration__subtitle">Please authorize to start using the platform</p>
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </div>
          <form action="" onSubmit={sendData}>
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="emailexample@gmail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="remember_forgot_row">
                <div className="checkboxEl2">
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
