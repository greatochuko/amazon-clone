import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linkGroup}>
          <h3 className={styles.title}>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.title}>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#"> Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.title}>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.title}>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Amazon Assistant</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <a href="#">
          <img src="/amazon-logo.png" alt="logo" />
        </a>
        <p>&copy; {new Date().getFullYear()} amazon inc</p>
      </div>
    </footer>
  );
}
