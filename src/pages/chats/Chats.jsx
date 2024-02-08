import { Link } from 'react-router-dom';
import Nav from './../../components/nav/nav';
import Sidebar from './../../components/sidebar/sidebar';

import './chats.sass';

const Chats = () => {
  return (
    <>
      <Nav />
      <main className="content">
        <Sidebar indexActiveEl={5} />
        <section className="chat">
          <div className="chat-left">
            <div className="chat__leftCol">Chats</div>
            <div className="chat__chats">
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-1.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Albert Flores</span>
                    <span className="chat__time">01:34 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status chat__status_purple-cl">Typing...</span>
                    <span className="chat__notification">3</span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-2.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Wade Warren</span>
                    <span className="chat__time">06:41 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      I found a 2007 study on effects of hand sanitizers on blood alcohol level in
                      adults. The 12 subjects applied 4 mL of hand sanitizer for 30 seconds per
                      application, 20 applications over a 30 min period (total exposure time 10
                      min).
                    </span>
                    <span className="chat__notification">1</span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/expo-profile-pic.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Expocar <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">07:59 pm</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers
                      throughout the prison to combat diseases…and it was a Roaring Success (as in
                      Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use
                      them.
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-3.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Ralph Edwards</span>
                    <span className="chat__time">17 Oct</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose
                      the same amount of alcohol as in a 150 lb adult, that might amount to 3.1 to
                      6.0 mg/L in the child’s body—still far below an intoxicating effect.{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-4.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Jane Cooper <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">Yesterday</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      In most states, the legal limit in blood alcohol to not be considered DUI is
                      500 to 1,000 mg/L. Therefore, this is way below a level considered to be
                      intoxication.
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-5.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Cameron Williamson
                      <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">17 Oct</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the
                      skin, but no, it would not cause intoxication.
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-6.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">
                      Darrell Steward
                      <img src="images/green-dot.svg" alt="Online icon" />
                    </span>
                    <span className="chat__time">12 Oct</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      Simultaneously we had a problem with prisoner drunkenness that we couldn’t
                      figure out. I mean , the guards searched cells multiple times to no avail.{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className="chat__userRow">
                <Link href="#" className="chat__userProfilePicture">
                  <img src="images/user-pp-7.png" alt="" />
                </Link>
                <div className="chat__userInfoCol">
                  <div className="chat__userNameRow">
                    <span className="chat__name">Guy Hawkins</span>
                    <span className="chat__time">09 Oct</span>
                  </div>
                  <div className="chat__statusRow">
                    <span className="chat__status">
                      Twenty 30-second applications within half an hour is well in excess of almost
                      anyone’s use of a sanitizer.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat__rightCol">
              <div className="chat__user">
                <Link href="#" className="chat__profilePicture">
                  <img src="images/expo-profile-pic.png" alt="" />
                </Link>
                <div className="chat__userInfo">
                  <div className="chat__userName">
                    <span>Expocar</span>
                    <img src="images/green-dot.svg" alt="" />
                  </div>
                  <div className="chat__status">Online</div>
                </div>
              </div>
              <div className="chat__KebabMenu">
                <img src="images/kebab-menu-icon.svg" alt="Kebab menu icon" />
              </div>
            </div>

            <div className="chat__chatRoom">
              <div className="chat-data">
                <div className="chat__date">December 22</div>
                <div className="chat__messageWrapper">
                  <div className="chat__messageContainer">
                    <Link href="#" className="chat__userProfilePicture">
                      <img src="images/expo-profile-pic.png" alt="User profile pictire" />
                    </Link>
                    <div className="chat__messageInner">
                      <p className="chat__messageText">
                        Your order #1456 has been successfully finished. Please confirm your current
                        wallet address to receive the cashback
                      </p>
                      <span className="chat__messageDeliveryTime">01:34 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">
                        I confirm. When should I expect the payment?
                      </p>
                      <span className="chat__messageDeliveryTime">02:18 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer">
                    <Link href="#" className="chat__userProfilePicture">
                      <img src="images/expo-profile-pic.png" alt="User profile pictire" />
                    </Link>
                    <div className="chat__messageInner">
                      <p className="chat__messageText">
                        You will receive your payment within 48 hours from the moment of
                        confirmation
                      </p>
                      <span className="chat__messageDeliveryTime">02:21 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                  <div className="chat__messageContainer chat__messageContainer_sent">
                    <div className="chat__messageInner chat__messageInner_sent">
                      <p className="chat__messageText">Great. Thank you very much!</p>
                      <span className="chat__messageDeliveryTime">02:23 pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <form action="" className="form">
                  <div className="textbox">
                    <img
                      className="textbox__paperClipIcon"
                      src="images/paper-clip-icon.svg"
                      alt="Paper clip icon"
                    />
                    <input type="text" name="" id="" placeholder="Your message..." />
                  </div>
                  <input className="submitBtn" type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Chats;
