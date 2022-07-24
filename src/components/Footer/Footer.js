import { Link } from "react-router-dom";
import List from "../List/List";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <svg viewBox="0 0 184 25">
          <path d="M 13.8 2.9 c 0 -2 -1.9 -2.5 -3.4 -2.5 v 0.3 c 0.9 0 1.6 0.3 1.6 1 c 0 0.4 -0.3 1 -1.2 1 c -0.7 0 -2.2 -0.4 -3.3 -0.8 C 6.2 1.4 5 1 4 1 C 2 1 0.6 2.5 0.6 4.2 c 0 1.5 1.1 2 1.5 2.2 l 0.1 -0.2 c -0.2 -0.2 -0.5 -0.4 -0.5 -1 c 0 -0.4 0.4 -1.1 1.4 -1.1 c 0.9 0 2.1 0.4 3.7 0.9 c 1.4 0.4 2.9 0.7 3.7 0.8 v 3.1 L 9 10.2 v 0.1 l 1.5 1.3 v 4.3 c -0.8 0.5 -1.7 0.6 -2.5 0.6 c -1.5 0 -2.8 -0.4 -3.9 -1.6 l 4.1 -2 V 6 l -5 2.2 C 3.6 6.9 4.7 6 5.8 5.4 l -0.1 -0.3 c -3 0.8 -5.7 3.6 -5.7 7 c 0 4 3.3 7 7 7 c 4 0 6.6 -3.2 6.6 -6.5 h -0.2 c -0.6 1.3 -1.5 2.5 -2.6 3.1 v -4.1 l 1.6 -1.3 v -0.1 l -1.6 -1.3 V 5.8 c 1.5 0 3 -1 3 -2.9 Z m -8.7 11 l -1.2 0.6 c -0.7 -0.9 -1.1 -2.1 -1.1 -3.8 c 0 -0.7 0 -1.5 0.2 -2.1 l 2.1 -0.9 v 6.2 Z m 10.6 2.3 l -1.3 1 l 0.2 0.2 l 0.6 -0.5 l 2.2 2 l 3 -2 l -0.1 -0.2 l -0.8 0.5 l -1 -1 V 9.4 l 0.8 -0.6 l 1.7 1.4 v 6.1 c 0 3.8 -0.8 4.4 -2.5 5 v 0.3 c 2.8 0.1 5.4 -0.8 5.4 -5.7 V 9.3 l 0.9 -0.7 l -0.2 -0.2 l -0.8 0.6 l -2.5 -2.1 L 18.5 9 V 0.8 h -0.2 l -3.5 2.4 v 0.2 c 0.4 0.2 1 0.4 1 1.5 l -0.1 11.3 Z M 34 15.1 L 31.5 17 L 29 15 v -1.2 l 4.7 -3.2 v -0.1 l -2.4 -3.6 l -5.2 2.8 v 6.6 l -1 0.8 l 0.2 0.2 l 0.9 -0.7 l 3.4 2.5 l 4.5 -3.6 l -0.1 -0.4 Z m -5 -1.7 V 8.5 l 0.2 -0.1 l 2.2 3.5 l -2.4 1.5 Z M 53.1 2 c 0 -0.3 -0.1 -0.6 -0.2 -0.9 h -0.2 c -0.3 0.8 -0.7 1.2 -1.7 1.2 c -0.9 0 -1.5 -0.5 -1.9 -0.9 l -2.9 3.3 l 0.2 0.2 l 1 -0.9 c 0.6 0.5 1.1 0.9 2.5 1 v 8.3 L 44 3.2 c -0.5 -0.8 -1.2 -1.9 -2.6 -1.9 c -1.6 0 -3 1.4 -2.8 3.6 h 0.3 c 0.1 -0.6 0.4 -1.3 1.1 -1.3 c 0.5 0 1 0.5 1.3 1 v 3.3 c -1.8 0 -3 0.8 -3 2.3 c 0 0.8 0.4 2 1.6 2.3 v -0.2 c -0.2 -0.2 -0.3 -0.4 -0.3 -0.7 c 0 -0.5 0.4 -0.9 1.1 -0.9 h 0.5 v 4.2 c -2.1 0 -3.8 1.2 -3.8 3.2 c 0 1.9 1.6 2.8 3.4 2.7 v -0.2 c -1.1 -0.1 -1.6 -0.6 -1.6 -1.3 c 0 -0.9 0.6 -1.3 1.4 -1.3 c 0.8 0 1.5 0.5 2 1.1 l 2.9 -3.2 l -0.2 -0.2 l -0.7 0.8 c -1.1 -1 -1.7 -1.3 -3 -1.5 V 5 l 8 14 h 0.6 V 5 c 1.5 -0.1 2.9 -1.3 2.9 -3 Z m 7.3 13.1 L 57.9 17 l -2.5 -2 v -1.2 l 4.7 -3.2 v -0.1 l -2.4 -3.6 l -5.2 2.8 v 6.6 l -1 0.8 l 0.2 0.2 l 0.9 -0.7 l 3.4 2.5 l 4.5 -3.6 l -0.1 -0.4 Z m -5 -1.7 V 8.5 l 0.2 -0.1 l 2.2 3.5 l -2.4 1.5 Z M 76.7 8 l -0.7 0.5 l -1.9 -1.6 l -2.2 2 l 0.9 0.9 v 7.5 l -2.4 -1.5 V 9.6 l 0.8 -0.5 l -2.3 -2.2 l -2.2 2 l 0.9 0.9 V 17 l -0.3 0.2 l -2.1 -1.5 v -6 c 0 -1.4 -0.7 -1.8 -1.5 -2.3 c -0.7 -0.5 -1.1 -0.8 -1.1 -1.5 c 0 -0.6 0.6 -0.9 0.9 -1.1 v -0.2 c -0.8 0 -2.9 0.8 -2.9 2.7 c 0 1 0.5 1.4 1 1.9 s 1 0.9 1 1.8 v 5.8 l -1.1 0.8 l 0.2 0.2 l 1 -0.8 l 2.3 2 l 2.5 -1.7 l 2.8 1.7 l 5.3 -3.1 V 9.2 l 1.3 -1 l -0.2 -0.2 Z m 18.6 -5.5 l -1 0.9 l -2.2 -2 l -3.3 2.4 V 1.6 h -0.3 l 0.1 16.2 c -0.3 0 -1.2 -0.2 -1.9 -0.4 l -0.2 -13.5 c 0 -1 -0.7 -2.4 -2.5 -2.4 s -3 1.4 -3 2.8 h 0.3 c 0.1 -0.6 0.4 -1.1 1 -1.1 s 1.1 0.4 1.1 1.7 v 3.9 c -1.8 0.1 -2.9 1.1 -2.9 2.4 c 0 0.8 0.4 2 1.6 2 V 13 c -0.4 -0.2 -0.5 -0.5 -0.5 -0.7 c 0 -0.6 0.5 -0.8 1.3 -0.8 h 0.4 v 6.2 c -1.5 0.5 -2.1 1.6 -2.1 2.8 c 0 1.7 1.3 2.9 3.3 2.9 c 1.4 0 2.6 -0.2 3.8 -0.5 c 1 -0.2 2.3 -0.5 2.9 -0.5 c 0.8 0 1.1 0.4 1.1 0.9 c 0 0.7 -0.3 1 -0.7 1.1 v 0.2 c 1.6 -0.3 2.6 -1.3 2.6 -2.8 s -1.5 -2.4 -3.1 -2.4 c -0.8 0 -2.5 0.3 -3.7 0.5 c -1.4 0.3 -2.8 0.5 -3.2 0.5 c -0.7 0 -1.5 -0.3 -1.5 -1.3 c 0 -0.8 0.7 -1.5 2.4 -1.5 c 0.9 0 2 0.1 3.1 0.4 c 1.2 0.3 2.3 0.6 3.3 0.6 c 1.5 0 2.8 -0.5 2.8 -2.6 V 3.7 l 1.2 -1 l -0.2 -0.2 Z m -4.1 6.1 c -0.3 0.3 -0.7 0.6 -1.2 0.6 s -1 -0.3 -1.2 -0.6 V 4.2 l 1 -0.7 l 1.4 1.3 v 3.8 Z m 0 3 c -0.2 -0.2 -0.7 -0.5 -1.2 -0.5 s -1 0.3 -1.2 0.5 V 9 c 0.2 0.2 0.7 0.5 1.2 0.5 s 1 -0.3 1.2 -0.5 v 2.6 Z m 0 4.7 c 0 0.8 -0.5 1.6 -1.6 1.6 h -0.8 V 12 c 0.2 -0.2 0.7 -0.5 1.2 -0.5 s 0.9 0.3 1.2 0.5 v 4.3 Z m 13.7 -7.1 l -3.2 -2.3 l -4.9 2.8 v 6.5 l -1 0.8 l 0.1 0.2 l 0.8 -0.6 l 3.2 2.4 l 5 -3 V 9.2 Z m -5.4 6.3 V 8.3 l 2.5 1.8 v 7.1 l -2.5 -1.7 Z m 14.9 -8.4 h -0.2 c -0.3 0.2 -0.6 0.4 -0.9 0.4 c -0.4 0 -0.9 -0.2 -1.1 -0.5 h -0.2 l -1.7 1.9 l -1.7 -1.9 l -3 2 l 0.1 0.2 l 0.8 -0.5 l 1 1.1 v 6.3 l -1.3 1 l 0.2 0.2 l 0.6 -0.5 l 2.4 2 l 3.1 -2.1 l -0.1 -0.2 l -0.9 0.5 l -1.2 -1 V 9 c 0.5 0.5 1.1 1 1.8 1 c 1.4 0.1 2.2 -1.3 2.3 -2.9 Z m 12 9.6 L 123 19 l -4.6 -7 l 3.3 -5.1 h 0.2 c 0.4 0.4 1 0.8 1.7 0.8 s 1.2 -0.4 1.5 -0.8 h 0.2 c -0.1 2 -1.5 3.2 -2.5 3.2 s -1.5 -0.5 -2.1 -0.8 l -0.3 0.5 l 5 7.4 l 1 -0.6 v 0.1 Z m -11 -0.5 l -1.3 1 l 0.2 0.2 l 0.6 -0.5 l 2.2 2 l 3 -2 l -0.2 -0.2 l -0.8 0.5 l -1 -1 V 0.8 h -0.1 l -3.6 2.4 v 0.2 c 0.4 0.2 1 0.3 1 1.5 v 11.3 Z M 143 2.9 c 0 -2 -1.9 -2.5 -3.4 -2.5 v 0.3 c 0.9 0 1.6 0.3 1.6 1 c 0 0.4 -0.3 1 -1.2 1 c -0.7 0 -2.2 -0.4 -3.3 -0.8 c -1.3 -0.4 -2.5 -0.8 -3.5 -0.8 c -2 0 -3.4 1.5 -3.4 3.2 c 0 1.5 1.1 2 1.5 2.2 l 0.1 -0.2 c -0.3 -0.2 -0.6 -0.4 -0.6 -1 c 0 -0.4 0.4 -1.1 1.4 -1.1 c 0.9 0 2.1 0.4 3.7 0.9 c 1.4 0.4 2.9 0.7 3.7 0.8 V 9 l -1.5 1.3 v 0.1 l 1.5 1.3 V 16 c -0.8 0.5 -1.7 0.6 -2.5 0.6 c -1.5 0 -2.8 -0.4 -3.9 -1.6 l 4.1 -2 V 6 l -5 2.2 c 0.5 -1.3 1.6 -2.2 2.6 -2.9 l -0.1 -0.2 c -3 0.8 -5.7 3.5 -5.7 6.9 c 0 4 3.3 7 7 7 c 4 0 6.6 -3.2 6.6 -6.5 h -0.2 c -0.6 1.3 -1.5 2.5 -2.6 3.1 v -4.1 l 1.6 -1.3 v -0.1 L 140 8.8 v -3 c 1.5 0 3 -1 3 -2.9 Z m -8.7 11 l -1.2 0.6 c -0.7 -0.9 -1.1 -2.1 -1.1 -3.8 c 0 -0.7 0.1 -1.5 0.3 -2.1 l 2.1 -0.9 l -0.1 6.2 Z m 12.2 -12 h -0.1 l -2 1.7 v 0.1 l 1.7 1.9 h 0.2 l 2 -1.7 v -0.1 l -1.8 -1.9 Z m 3 14.8 l -0.8 0.5 l -1 -1 V 9.3 l 1 -0.7 l -0.2 -0.2 l -0.7 0.6 l -1.8 -2.1 l -2.9 2 l 0.2 0.3 l 0.7 -0.5 l 0.9 1.1 v 6.5 l -1.3 1 l 0.1 0.2 l 0.7 -0.5 l 2.2 2 l 3 -2 l -0.1 -0.3 Z m 16.7 -0.1 l -0.7 0.5 l -1.1 -1 V 9.3 l 1 -0.8 l -0.2 -0.2 l -0.8 0.7 l -2.3 -2.1 l -3 2.1 l -2.3 -2.1 L 154 9 l -1.8 -2.1 l -2.9 2 l 0.1 0.3 l 0.7 -0.5 l 1 1.1 v 6.5 l -0.8 0.8 l 2.3 1.9 l 2.2 -2 l -0.9 -0.9 V 9.3 l 0.9 -0.6 l 1.5 1.4 v 6 l -0.8 0.8 l 2.3 1.9 l 2.2 -2 l -0.9 -0.9 V 9.3 l 0.8 -0.5 l 1.6 1.4 v 6 l -0.7 0.7 l 2.3 2.1 l 3.1 -2.1 v -0.3 Z m 8.7 -1.5 l -2.5 1.9 l -2.5 -2 v -1.2 l 4.7 -3.2 v -0.1 l -2.4 -3.6 l -5.2 2.8 v 6.8 l 3.5 2.5 l 4.5 -3.6 l -0.1 -0.3 Z m -5 -1.7 V 8.5 l 0.2 -0.1 l 2.2 3.5 l -2.4 1.5 Z m 14.1 -0.9 l -1.9 -1.5 c 1.3 -1.1 1.8 -2.6 1.8 -3.6 v -0.6 h -0.2 c -0.2 0.5 -0.6 1 -1.4 1 c -0.8 0 -1.3 -0.4 -1.8 -1 L 176 9.3 v 3.6 l 1.7 1.3 c -1.7 1.5 -2 2.5 -2 3.3 c 0 1 0.5 1.7 1.3 2 l 0.1 -0.2 c -0.2 -0.2 -0.4 -0.3 -0.4 -0.8 c 0 -0.3 0.4 -0.8 1.2 -0.8 c 1 0 1.6 0.7 1.9 1 l 4.3 -2.6 v -3.6 h -0.1 Z m -1.1 -3 c -0.7 1.2 -2.2 2.4 -3.1 3 l -1.1 -0.9 V 8.1 c 0.4 1 1.5 1.8 2.6 1.8 c 0.7 0 1.1 -0.1 1.6 -0.4 Z m -1.7 8 c -0.5 -1.1 -1.7 -1.9 -2.9 -1.9 c -0.3 0 -1.1 0 -1.9 0.5 c 0.5 -0.8 1.8 -2.2 3.5 -3.2 l 1.2 1 l 0.1 3.6 Z"></path>
        </svg>
      </Link>
      <div className={styles.listas}>
        <div>
          <span>NEWS</span>
          <ul>
            <Link to="/section/world">
              <List value="World"></List>
            </Link>
            <Link to="/section/politics">
              <List value="Politics"></List>
            </Link>
            <Link to="/section/tech">
              <List value="Tech"></List>
            </Link>
            <Link to="/section/science">
              <List value="Science"></List>
            </Link>
            <Link to="/section/health">
              <List value="Health"></List>
            </Link>
          </ul>
        </div>
        <div>
          <span>OPINION</span>
          <ul>
            <List value="Today's Opinion" />
            <List value="Columnists" />
            <List value="Editorials" />
            <List value="Guest Essays" />
            <List value="Letters" />
            <List value="Sunday Opinion" />
            <List value="Opinion Video" />
          </ul>
        </div>
        <div>
          <span>ARTS</span>
          <ul>
            <List value="Today's Arts" />
            <List value="Art &amp; Design" />
            <List value="Books" />
            <List value="Best Sellers Book List" />
            <List value="Dance" />
            <List value="Movies" />
            <List value="Music" />
            <List value="Pop Culture" />
            <List value="Television" />
            <List value="Theater" />
            <List value="Video: Arts" />
          </ul>
        </div>
        <div>
          <span>LIVING</span>
          <ul>
            <List value="Automotive" />
            <List value="Games" />
            <List value="Education" />
            <List value="Food" />
            <List value="Health" />
            <List value="Jobs" />
            <List value="Love" />
            <List value="Magazine" />
            <List value="Parenting" />
            <List value="Real Estate" />
            <List value="Style" />
            <List value="T Magazine" />
            <List value="Travel" />
          </ul>
        </div>
        <div>
          <span>MORE</span>
          <ul>
            <List value="Reader Center" />
            <List value="The Athletic" />
            <List value="Wirecutter" />
            <List value="Cooking" />
            <List value="Headway" />
            <List value="Live Events" />
            <List value="The Learning Network" />
            <List value="Tools &amp; Services" />
            <List value="Podcasts" />
            <List value="Video" />
            <List value="TimesMachine" />
            <List value="NYT Store" />
            <List value="Manage My Account" />
            <List value="NYTLicensing" />
          </ul>
        </div>
        <div>
          <span>SUBSCRIBE</span>
          <ul>
            <List value="Home Delivery" />
            <List value="Digital Subscriptions" />
            <List value="Games" />
            <List value="Cooking" />
          </ul>
          <ul>
            <List value="Email Newsletters" />
            <List value="Corporate Subscriptions" />
            <List value="Education Rate" />
          </ul>
          <ul>
            <List value="Mobile Applications" />
            <List value="Replica Edition" />
            <List value="International" />
            <List value="Canada" />
            <List value="Español" />
            <List value="中文网" />
          </ul>
        </div>
      </div>

      <div className={styles.lastLi}>
        <ul>
          <List value="© 2022 The New York Times Company" />
          <List value="NYTCo" />
          <List value="Contact Us" />
          <List value="Accessibility" />
          <List value="Work with us" />
          <List value="Advertise" />
          <List value="T Brand Studio" />
          <List value="Your Ad Choices" />
          <List value="Privacy Policy" />
          <List value="Terms of Service" />
          <List value="Terms of Sale" />
          <List value="Site Map" />
          <List value="Help" />
          <List value="Subscriptions" />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
