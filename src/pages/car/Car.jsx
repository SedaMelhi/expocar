import { Link } from 'react-router-dom';

import Nav from '../../components/nav/nav';
import Sidebar from '../../components/sidebar/sidebar';

import './car.sass';

const Car = () => {
  return (
    <div>
      <Nav />
      <div className="content">
        <Sidebar indexActiveEl={0} />
        <section className="main">
          <div className="product">
            <div className="product__firstCol">
              <h2 className="product__name">Porsche Cayenne Coupe 2022</h2>
              <div className="product__info product__info_margin">
                <div className="product__leftCol">
                  <span className="product__title">Fuel Usage</span>
                  <span className="product__numbers">2903.89 Ltr</span>
                </div>
                <div className="product__vl"></div>
                <div className="product__rightCol">
                  <span className="product__title">KM Driven</span>
                  <span className="product__numbers">38 000 KM</span>
                </div>
              </div>
              <div className="product__info">
                <div className="product__leftCol">
                  <span className="product__title">Total Cost</span>
                  <span className="product__numbers">$3,00,290.00</span>
                </div>
                <div className="product__vl"></div>
                <div className="product__rightCol">
                  <span className="product__title">Top Speed</span>
                  <span className="product__numbers">$5.2K</span>
                </div>
              </div>
            </div>
            <div className="product__imgWrapper">
              <div className="product__img">
                <img src="images/car-img.png" alt="Porsche Cayenne Coupe 2022" />
              </div>
            </div>
            <ul className="product__characteristics">
              <li>
                Body Type: <span>UTILITY CAB</span>
              </li>
              <li>
                Colour: <span>White</span>
              </li>
              <li>
                GVM: <span>5 tons</span>
              </li>
              <li>
                Registration: <span>124YTRB</span>
              </li>
              <li>
                Registration Exp: <span>04/2024</span>
              </li>
              <li>
                Registration State: <span>LAG</span>
              </li>
              <li>
                Year: <span>2013</span>
              </li>
              <li>
                Ownership: <span>From 2017 to 2021</span>
              </li>
            </ul>
          </div>
          <div className="car-content-left">
            <div className="activity"></div>
            <div className="notiesAndAvailableSensors">
              <div className="noties">
                <h2 className="noties__title">Noties</h2>
                <div className="noties__content">
                  <div className="noties__col">
                    <div className="noties__imgCol">
                      <img src="images/icon-1.svg" alt="Icon" />
                    </div>
                    <div className="noties__txtCol">
                      <div className="noties__date">Monday, 6th Apirl 2020</div>
                      <div className="noties__txt">Book for General Service</div>
                      <div className="noties__status">COMPLETED</div>
                    </div>
                  </div>
                  <div className="noties__col">
                    <div className="noties__imgCol">
                      <img src="images/icon-2.svg" alt="Icon" />
                    </div>
                    <div className="noties__txtCol">
                      <div className="noties__date">Thursday, 24th October 2021</div>
                      <div className="noties__txt">Maintenance Completed, Collect</div>
                      <div className="noties__status noties__status_gray">14:07-21/11/2021</div>
                    </div>
                  </div>
                  <div className="noties__col">
                    <div className="noties__imgCol">
                      <img src="images/icon-3.svg" alt="Icon" />
                    </div>
                    <div className="noties__txtCol">
                      <div className="noties__date">Monday, 13th August 2018</div>
                      <div className="noties__txt">Maintenance Completed, Collect</div>
                      <div className="noties__status noties__status_gray">14:07-21/11/2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="availableSensors">
                <div className="availableSensors__title">
                  <div className="availableSensors__txt">Available Sensors</div>
                  <select className="availableSensors__select" name="" id="">
                    <option value="Assets">Assets</option>
                  </select>
                </div>
                <div className="availableSensors__hl"></div>
                <div className="checkboxes">
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox1" id="checkbox1" />
                    <label htmlFor="checkbox1">
                      <span>
                        Asset - Fuel Consumed <span className="greyCl">(10)</span>
                      </span>
                      <svg
                        className="checkbox__icon checkbox__icon_active"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.25033 13.3334C6.58185 13.3334 6.89979 13.2017 7.13421 12.9673C7.36863 12.7329 7.50033 12.4149 7.50033 12.0834C7.50439 12.0418 7.50439 12 7.50033 11.9584L9.82533 9.63342H10.017H10.2087L11.5503 10.9751C11.5503 10.9751 11.5503 11.0167 11.5503 11.0417C11.5503 11.3733 11.682 11.6912 11.9164 11.9256C12.1509 12.1601 12.4688 12.2917 12.8003 12.2917C13.1318 12.2917 13.4498 12.1601 13.6842 11.9256C13.9186 11.6912 14.0503 11.3733 14.0503 11.0417V10.9751L17.0837 7.91675C17.3309 7.91675 17.5726 7.84344 17.7781 7.70609C17.9837 7.56873 18.1439 7.37351 18.2385 7.1451C18.3331 6.9167 18.3579 6.66536 18.3096 6.42289C18.2614 6.18041 18.1424 5.95768 17.9675 5.78286C17.7927 5.60805 17.57 5.489 17.3275 5.44077C17.085 5.39253 16.8337 5.41729 16.6053 5.5119C16.3769 5.60651 16.1817 5.76672 16.0443 5.97229C15.907 6.17785 15.8337 6.41952 15.8337 6.66675C15.8296 6.70832 15.8296 6.75018 15.8337 6.79175L12.8253 9.80008H12.692L11.2503 8.33342C11.2503 8.00189 11.1186 7.68395 10.8842 7.44953C10.6498 7.21511 10.3318 7.08342 10.0003 7.08342C9.66881 7.08342 9.35086 7.21511 9.11644 7.44953C8.88202 7.68395 8.75033 8.00189 8.75033 8.33342L6.25033 10.8334C5.91881 10.8334 5.60086 10.9651 5.36644 11.1995C5.13202 11.434 5.00033 11.7519 5.00033 12.0834C5.00033 12.4149 5.13202 12.7329 5.36644 12.9673C5.60086 13.2017 5.91881 13.3334 6.25033 13.3334ZM17.5003 16.6667H3.33366V2.50008C3.33366 2.27907 3.24586 2.06711 3.08958 1.91083C2.9333 1.75455 2.72134 1.66675 2.50033 1.66675C2.27931 1.66675 2.06735 1.75455 1.91107 1.91083C1.75479 2.06711 1.66699 2.27907 1.66699 2.50008V17.5001C1.66699 17.7211 1.75479 17.9331 1.91107 18.0893C2.06735 18.2456 2.27931 18.3334 2.50033 18.3334H17.5003C17.7213 18.3334 17.9333 18.2456 18.0896 18.0893C18.2459 17.9331 18.3337 17.7211 18.3337 17.5001C18.3337 17.2791 18.2459 17.0671 18.0896 16.9108C17.9333 16.7545 17.7213 16.6667 17.5003 16.6667Z" />
                      </svg>
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox2" id="checkbox2" />
                    <label htmlFor="checkbox2">
                      <span>
                        Asset - Odometer <span className="greyCl">(km)</span>
                      </span>
                      <svg
                        className="checkbox__icon checkbox__icon_active"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.25033 13.3334C6.58185 13.3334 6.89979 13.2017 7.13421 12.9673C7.36863 12.7329 7.50033 12.4149 7.50033 12.0834C7.50439 12.0418 7.50439 12 7.50033 11.9584L9.82533 9.63342H10.017H10.2087L11.5503 10.9751C11.5503 10.9751 11.5503 11.0167 11.5503 11.0417C11.5503 11.3733 11.682 11.6912 11.9164 11.9256C12.1509 12.1601 12.4688 12.2917 12.8003 12.2917C13.1318 12.2917 13.4498 12.1601 13.6842 11.9256C13.9186 11.6912 14.0503 11.3733 14.0503 11.0417V10.9751L17.0837 7.91675C17.3309 7.91675 17.5726 7.84344 17.7781 7.70609C17.9837 7.56873 18.1439 7.37351 18.2385 7.1451C18.3331 6.9167 18.3579 6.66536 18.3096 6.42289C18.2614 6.18041 18.1424 5.95768 17.9675 5.78286C17.7927 5.60805 17.57 5.489 17.3275 5.44077C17.085 5.39253 16.8337 5.41729 16.6053 5.5119C16.3769 5.60651 16.1817 5.76672 16.0443 5.97229C15.907 6.17785 15.8337 6.41952 15.8337 6.66675C15.8296 6.70832 15.8296 6.75018 15.8337 6.79175L12.8253 9.80008H12.692L11.2503 8.33342C11.2503 8.00189 11.1186 7.68395 10.8842 7.44953C10.6498 7.21511 10.3318 7.08342 10.0003 7.08342C9.66881 7.08342 9.35086 7.21511 9.11644 7.44953C8.88202 7.68395 8.75033 8.00189 8.75033 8.33342L6.25033 10.8334C5.91881 10.8334 5.60086 10.9651 5.36644 11.1995C5.13202 11.434 5.00033 11.7519 5.00033 12.0834C5.00033 12.4149 5.13202 12.7329 5.36644 12.9673C5.60086 13.2017 5.91881 13.3334 6.25033 13.3334ZM17.5003 16.6667H3.33366V2.50008C3.33366 2.27907 3.24586 2.06711 3.08958 1.91083C2.9333 1.75455 2.72134 1.66675 2.50033 1.66675C2.27931 1.66675 2.06735 1.75455 1.91107 1.91083C1.75479 2.06711 1.66699 2.27907 1.66699 2.50008V17.5001C1.66699 17.7211 1.75479 17.9331 1.91107 18.0893C2.06735 18.2456 2.27931 18.3334 2.50033 18.3334H17.5003C17.7213 18.3334 17.9333 18.2456 18.0896 18.0893C18.2459 17.9331 18.3337 17.7211 18.3337 17.5001C18.3337 17.2791 18.2459 17.0671 18.0896 16.9108C17.9333 16.7545 17.7213 16.6667 17.5003 16.6667Z" />
                      </svg>
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox3" id="checkbox3" />
                    <label htmlFor="checkbox3">
                      <span>
                        Asset - Runtime <span className="greyCl">(km)</span>
                      </span>
                      <svg
                        className="checkbox__icon checkbox__icon_active"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.25033 13.3334C6.58185 13.3334 6.89979 13.2017 7.13421 12.9673C7.36863 12.7329 7.50033 12.4149 7.50033 12.0834C7.50439 12.0418 7.50439 12 7.50033 11.9584L9.82533 9.63342H10.017H10.2087L11.5503 10.9751C11.5503 10.9751 11.5503 11.0167 11.5503 11.0417C11.5503 11.3733 11.682 11.6912 11.9164 11.9256C12.1509 12.1601 12.4688 12.2917 12.8003 12.2917C13.1318 12.2917 13.4498 12.1601 13.6842 11.9256C13.9186 11.6912 14.0503 11.3733 14.0503 11.0417V10.9751L17.0837 7.91675C17.3309 7.91675 17.5726 7.84344 17.7781 7.70609C17.9837 7.56873 18.1439 7.37351 18.2385 7.1451C18.3331 6.9167 18.3579 6.66536 18.3096 6.42289C18.2614 6.18041 18.1424 5.95768 17.9675 5.78286C17.7927 5.60805 17.57 5.489 17.3275 5.44077C17.085 5.39253 16.8337 5.41729 16.6053 5.5119C16.3769 5.60651 16.1817 5.76672 16.0443 5.97229C15.907 6.17785 15.8337 6.41952 15.8337 6.66675C15.8296 6.70832 15.8296 6.75018 15.8337 6.79175L12.8253 9.80008H12.692L11.2503 8.33342C11.2503 8.00189 11.1186 7.68395 10.8842 7.44953C10.6498 7.21511 10.3318 7.08342 10.0003 7.08342C9.66881 7.08342 9.35086 7.21511 9.11644 7.44953C8.88202 7.68395 8.75033 8.00189 8.75033 8.33342L6.25033 10.8334C5.91881 10.8334 5.60086 10.9651 5.36644 11.1995C5.13202 11.434 5.00033 11.7519 5.00033 12.0834C5.00033 12.4149 5.13202 12.7329 5.36644 12.9673C5.60086 13.2017 5.91881 13.3334 6.25033 13.3334ZM17.5003 16.6667H3.33366V2.50008C3.33366 2.27907 3.24586 2.06711 3.08958 1.91083C2.9333 1.75455 2.72134 1.66675 2.50033 1.66675C2.27931 1.66675 2.06735 1.75455 1.91107 1.91083C1.75479 2.06711 1.66699 2.27907 1.66699 2.50008V17.5001C1.66699 17.7211 1.75479 17.9331 1.91107 18.0893C2.06735 18.2456 2.27931 18.3334 2.50033 18.3334H17.5003C17.7213 18.3334 17.9333 18.2456 18.0896 18.0893C18.2459 17.9331 18.3337 17.7211 18.3337 17.5001C18.3337 17.2791 18.2459 17.0671 18.0896 16.9108C17.9333 16.7545 17.7213 16.6667 17.5003 16.6667Z" />
                      </svg>
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox4" id="checkbox4" />
                    <label htmlFor="checkbox4">
                      <span>
                        Asset - Speed <span className="greyCl">(hr)</span>
                      </span>
                      <svg
                        className="checkbox__icon checkbox__icon_active"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.25033 13.3334C6.58185 13.3334 6.89979 13.2017 7.13421 12.9673C7.36863 12.7329 7.50033 12.4149 7.50033 12.0834C7.50439 12.0418 7.50439 12 7.50033 11.9584L9.82533 9.63342H10.017H10.2087L11.5503 10.9751C11.5503 10.9751 11.5503 11.0167 11.5503 11.0417C11.5503 11.3733 11.682 11.6912 11.9164 11.9256C12.1509 12.1601 12.4688 12.2917 12.8003 12.2917C13.1318 12.2917 13.4498 12.1601 13.6842 11.9256C13.9186 11.6912 14.0503 11.3733 14.0503 11.0417V10.9751L17.0837 7.91675C17.3309 7.91675 17.5726 7.84344 17.7781 7.70609C17.9837 7.56873 18.1439 7.37351 18.2385 7.1451C18.3331 6.9167 18.3579 6.66536 18.3096 6.42289C18.2614 6.18041 18.1424 5.95768 17.9675 5.78286C17.7927 5.60805 17.57 5.489 17.3275 5.44077C17.085 5.39253 16.8337 5.41729 16.6053 5.5119C16.3769 5.60651 16.1817 5.76672 16.0443 5.97229C15.907 6.17785 15.8337 6.41952 15.8337 6.66675C15.8296 6.70832 15.8296 6.75018 15.8337 6.79175L12.8253 9.80008H12.692L11.2503 8.33342C11.2503 8.00189 11.1186 7.68395 10.8842 7.44953C10.6498 7.21511 10.3318 7.08342 10.0003 7.08342C9.66881 7.08342 9.35086 7.21511 9.11644 7.44953C8.88202 7.68395 8.75033 8.00189 8.75033 8.33342L6.25033 10.8334C5.91881 10.8334 5.60086 10.9651 5.36644 11.1995C5.13202 11.434 5.00033 11.7519 5.00033 12.0834C5.00033 12.4149 5.13202 12.7329 5.36644 12.9673C5.60086 13.2017 5.91881 13.3334 6.25033 13.3334ZM17.5003 16.6667H3.33366V2.50008C3.33366 2.27907 3.24586 2.06711 3.08958 1.91083C2.9333 1.75455 2.72134 1.66675 2.50033 1.66675C2.27931 1.66675 2.06735 1.75455 1.91107 1.91083C1.75479 2.06711 1.66699 2.27907 1.66699 2.50008V17.5001C1.66699 17.7211 1.75479 17.9331 1.91107 18.0893C2.06735 18.2456 2.27931 18.3334 2.50033 18.3334H17.5003C17.7213 18.3334 17.9333 18.2456 18.0896 18.0893C18.2459 17.9331 18.3337 17.7211 18.3337 17.5001C18.3337 17.2791 18.2459 17.0671 18.0896 16.9108C17.9333 16.7545 17.7213 16.6667 17.5003 16.6667Z" />
                      </svg>
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox5" id="checkbox5" />
                    <label htmlFor="checkbox5">
                      <span>
                        Engine Temperature <span className="greyCl">(deg C)</span>
                      </span>
                      <svg
                        className="checkbox__icon checkbox__icon_active"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.25033 13.3334C6.58185 13.3334 6.89979 13.2017 7.13421 12.9673C7.36863 12.7329 7.50033 12.4149 7.50033 12.0834C7.50439 12.0418 7.50439 12 7.50033 11.9584L9.82533 9.63342H10.017H10.2087L11.5503 10.9751C11.5503 10.9751 11.5503 11.0167 11.5503 11.0417C11.5503 11.3733 11.682 11.6912 11.9164 11.9256C12.1509 12.1601 12.4688 12.2917 12.8003 12.2917C13.1318 12.2917 13.4498 12.1601 13.6842 11.9256C13.9186 11.6912 14.0503 11.3733 14.0503 11.0417V10.9751L17.0837 7.91675C17.3309 7.91675 17.5726 7.84344 17.7781 7.70609C17.9837 7.56873 18.1439 7.37351 18.2385 7.1451C18.3331 6.9167 18.3579 6.66536 18.3096 6.42289C18.2614 6.18041 18.1424 5.95768 17.9675 5.78286C17.7927 5.60805 17.57 5.489 17.3275 5.44077C17.085 5.39253 16.8337 5.41729 16.6053 5.5119C16.3769 5.60651 16.1817 5.76672 16.0443 5.97229C15.907 6.17785 15.8337 6.41952 15.8337 6.66675C15.8296 6.70832 15.8296 6.75018 15.8337 6.79175L12.8253 9.80008H12.692L11.2503 8.33342C11.2503 8.00189 11.1186 7.68395 10.8842 7.44953C10.6498 7.21511 10.3318 7.08342 10.0003 7.08342C9.66881 7.08342 9.35086 7.21511 9.11644 7.44953C8.88202 7.68395 8.75033 8.00189 8.75033 8.33342L6.25033 10.8334C5.91881 10.8334 5.60086 10.9651 5.36644 11.1995C5.13202 11.434 5.00033 11.7519 5.00033 12.0834C5.00033 12.4149 5.13202 12.7329 5.36644 12.9673C5.60086 13.2017 5.91881 13.3334 6.25033 13.3334ZM17.5003 16.6667H3.33366V2.50008C3.33366 2.27907 3.24586 2.06711 3.08958 1.91083C2.9333 1.75455 2.72134 1.66675 2.50033 1.66675C2.27931 1.66675 2.06735 1.75455 1.91107 1.91083C1.75479 2.06711 1.66699 2.27907 1.66699 2.50008V17.5001C1.66699 17.7211 1.75479 17.9331 1.91107 18.0893C2.06735 18.2456 2.27931 18.3334 2.50033 18.3334H17.5003C17.7213 18.3334 17.9333 18.2456 18.0896 18.0893C18.2459 17.9331 18.3337 17.7211 18.3337 17.5001C18.3337 17.2791 18.2459 17.0671 18.0896 16.9108C17.9333 16.7545 17.7213 16.6667 17.5003 16.6667Z" />
                      </svg>
                    </label>
                  </div>
                </div>
                <Link to="/" className="availableSensors__link">
                  See All
                </Link>
              </div>
            </div>
            <div className="reminder">
              <div className="reminder__firstRow">
                <p className="remider__title">Reminder</p>
                <button className="reminder__btn">+ Add New</button>
              </div>
              <div className="reminder__secondRow">
                <span className="reminder__heading">Description</span>
                <span className="reminder__heading">Due</span>
                <span className="reminder__heading reminder__heading_hidden">Overdue</span>
                <span className="reminder__heading reminder__heading_hidden">Notify</span>
                <span className="reminder__heading reminder__heading_hidden">Status</span>
              </div>
              <div className="reminder__infoRow">
                <span className="reminder__info">Urgent Safety Recall</span>
                <span className="reminder__info">06/04/2022</span>
                <span className="reminder__info reminder__info_hidden">08/04/2022</span>
                <span className="reminder__info reminder__info_hidden">David Demo</span>
                <span className="reminder__info reminder__info_hidden">Completed</span>
              </div>
              <div className="reminder__infoRow">
                <span className="reminder__info">Urgent Safety Recall</span>
                <span className="reminder__info">06/04/2022</span>
                <span className="reminder__info reminder__info_hidden">08/04/2022</span>
                <span className="reminder__info reminder__info_hidden">David Demo</span>
                <span className="reminder__info reminder__info_hidden">Completed</span>
              </div>
              <div className="reminder__dots">
                <img src="images/dot.svg" alt="Dot" />
                <img src="images/dot.svg" alt="Dot" />
                <img src="images/dot.svg" alt="Dot" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Car;
