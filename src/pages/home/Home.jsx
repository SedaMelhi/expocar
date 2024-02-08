import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './home.sass';

const Home = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const plusBtn = useRef(null);
  //carCard_hidden
  return (
    <div>
      <Nav />
      <main className="content">
        <Sidebar indexActiveEl={0} />
        <section
          className="myCars"
          onClick={(e) => plusBtn.current !== e.target && setIsOpenForm(false)}>
          <div className="myCars__title">My cars</div>
          <div className="selectWrapper">
            <div className="selectContainer">
              <select className="select" name="" id="">
                <option value="New">New</option>
              </select>
              <select className="select select_sm" name="" id="">
                <option value="New">all</option>
              </select>
            </div>
            <div className="iconsContainer">
              <img src="images/gray-dashboard.svg" alt="Dashboard icon" />
              <img src="images/filter.svg" alt="Filter icon" />
            </div>
          </div>
          <div className="carCatalog">
            <div className="carCard catalog-add" onClick={() => setIsOpenForm(true)} ref={plusBtn}>
              <div className="carCard__addIcon prevent">
                <img src="images/add-icon.png" alt="Add icon" />
              </div>
            </div>
            <Link to="/car" className="catalog-card">
              <div className="carCard">
                <div>
                  <div className="carCard__title">Tesla Model S 2013</div>
                  <div className="carCard__subtitle">Coupe</div>
                </div>
                <div className="carCard__carImg carCard__carImg_reversed">
                  <img src="images/car-img-1.png" alt="" />
                </div>
                <div className="carCard__info">
                  <div className="carCard__infoLeftCol">
                    <div className="carCard__number">
                      <img src="images/person-icon.svg" alt="Person icon" />
                      <span>4</span>
                    </div>
                    <div className="carCard__manual">
                      <img src="images/reverse-icon.svg" alt="Reverse icon" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="carCard__km">38.K KM</div>
                </div>
              </div>
            </Link>
            <Link to="/car" className="catalog-card">
              {' '}
              <div className="carCard">
                <div>
                  <div className="carCard__title">Toyota Auris 2009</div>
                  <div className="carCard__subtitle">Coupe</div>
                </div>
                <div className="carCard__carImg carCard__carImg_reversed">
                  <img src="images/car-img-2png.png" alt="" />
                </div>
                <div className="carCard__info">
                  <div className="carCard__infoLeftCol">
                    <div className="carCard__number">
                      <img src="images/person-icon.svg" alt="Person icon" />
                      <span>4</span>
                    </div>
                    <div className="carCard__manual">
                      <img src="images/reverse-icon.svg" alt="Reverse icon" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="carCard__km">35.K KM</div>
                </div>
              </div>
            </Link>
            <Link to="/car" className="catalog-card">
              <div className="carCard">
                <div>
                  <div className="carCard__title">Mercedes-Benz E className 2013</div>
                  <div className="carCard__subtitle">Coupe</div>
                </div>
                <div className="carCard__carImg">
                  <img src="images/car-img-3.png" alt="" />
                </div>
                <div className="carCard__info">
                  <div className="carCard__infoLeftCol">
                    <div className="carCard__number">
                      <img src="images/person-icon.svg" alt="Person icon" />
                      <span>4</span>
                    </div>
                    <div className="carCard__manual">
                      <img src="images/reverse-icon.svg" alt="Reverse icon" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="carCard__km">52.K KM</div>
                </div>
              </div>
            </Link>
            <Link to="/car" className="catalog-card">
              <div className="carCard">
                <div>
                  <div className="carCard__title">Mercedes-Benz EQC 2020</div>
                  <div className="carCard__subtitle">Coupe</div>
                </div>
                <div className="carCard__carImg carCard__carImg_reversed">
                  <img src="images/car-img-4.png" alt="" />
                </div>
                <div className="carCard__info">
                  <div className="carCard__infoLeftCol">
                    <div className="carCard__number">
                      <img src="images/person-icon.svg" alt="Person icon" />
                      <span>4</span>
                    </div>
                    <div className="carCard__manual">
                      <img src="images/reverse-icon.svg" alt="Reverse icon" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="carCard__km">9.K KM</div>
                </div>
              </div>
            </Link>
          </div>
          {isOpenForm && (
            <div className="addCar__wrap">
              <div className="blur" onClick={() => setIsOpenForm(false)}></div>{' '}
              <section className="addCar">
                <h1 className="addCar__title">Add your auto</h1>
                <form action="">
                  <div className="formInner">
                    <div className="inputbox">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        placeholder="Khalid Umalatov"
                        name="brand"
                        id="brand"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="model"
                        id="model"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        placeholder="Enter your password"
                        name="year"
                        id="year"
                        required
                      />
                    </div>

                    <div className="inputbox">
                      <label htmlFor="yearsOfOwnership">Years of ownership</label>
                      <input
                        type="text"
                        placeholder="emailexample@gmail.com"
                        name="yearsOfOwnership"
                        id="yearsOfOwnership"
                        required
                      />
                    </div>
                    <button type="submit" className="primaryBtn">
                      Add
                    </button>
                  </div>
                </form>
              </section>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
export default Home;
