import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';

import { auth } from '../../../api/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/authSlice/authSlice';

import './registration.sass';

const Registration = () => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    if (password === password2) {
      auth('/api/users/', { email, password, full_name })
        .then((res) => {
          if (res.status) {
            dispatch(
              setAuth({
                id: res.data.id,
                full_name: res.data.full_name,
                email: res.data.email,
                token: res.data.token,
              }),
            );
            localStorage.setItem('token', res.data.token);
            navigate('/');
          } else {
            console.log('ошибка!');
          }
        })
        .catch((res) => setError(res.response.data.error));
    }
  };

  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Sign up</h1>
            <p className="registration__subtitle">Please register to start using the platform</p>
            {error && <span style={{ color: 'red', opacity: '.9' }}>{error}</span>}
          </div>
          <form onSubmit={sendData}>
            <div className="formInner">
              <div className="inputbox">
                <label htmlFor="name">Full name (as in passport)</label>
                <input
                  type="text"
                  placeholder="Khalid Umalatov"
                  name="name"
                  id="name"
                  value={full_name}
                  onChange={(e) => setFull_name(e.target.value)}
                  required
                />
              </div>

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

              <div className="inputbox">
                <label htmlFor="confirm_psw" className="flex-sb">
                  Confirm password
                  {password !== password2 && (
                    <span style={{ color: 'red', opacity: '.9' }}>Password mismatch!</span>
                  )}
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="confirm_psw"
                  id="confirm_psw"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
              </div>

              <div className="checkboxEl">
                <input type="checkbox" name="checkbox" id="checkbox" required />
                <label htmlFor="checkbox">
                  I accept the <Link to="/">Terms of use</Link> and the
                  <Link href="/"> Privacy policy</Link>
                </label>
              </div>
              <button type="submit" className="primaryBtn">
                Sign up
              </button>
              <p className="registration__link">
                Already have an account? &nbsp;
                <Link to="/authorization">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registration;
