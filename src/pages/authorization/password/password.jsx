import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';

const Password = () => {
  return (
    <>
      <Nav />
      <section className="registration">
        <div className="registrationInner">
          <div className="registration__text">
            <h1 className="registration__title">Forgot password?</h1>
            <p className="registration__subtitle">
              Please enter your email to get reset instructions
            </p>
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

              <button type="submit" className="primaryBtn">
                Send reset instructions
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

export default Password;
