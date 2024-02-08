import { Link } from 'react-router-dom';

import Footer from './footer/footer';
import Nav from './nav/nav';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../api/auth';
import { setAuth, setIsRemember } from '../../redux/authSlice/authSlice';

import './authorisation.sass';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isRemember = useSelector((state) => state.auth.isRemember);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    auth('/auth-token/', { email, password })
      .then((res) => {
        dispatch(setAuth(res.data.token));
      })
      .catch((res) => {
        setError(
          res.response.data.email && res.response.data.email[0]
            ? res.response.data.email[0]
            : 'Unable to log in with provided credentials',
        );
      });
  };
  useEffect(() => {
    dispatch(setIsRemember(false));
  }, []);
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
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    value={isRemember}
                    onChange={() => dispatch(setIsRemember(!isRemember))}
                  />
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
