import { header, logo, imageLink } from "./Header.module.css";

export default function Header() {
  return (
    <div className={header}>
      <img className={logo} src="/amazon-logo.png" alt="Amazon logo" />
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Today&apos;s Deals</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="Search Amazon" />
        <button type="submit">
          <img src="search-icon.png " alt="search icon" />
        </button>
      </form>
      <img className={imageLink} src="user-icon.png" alt="user icon" />
      <img className={imageLink} src="cart-icon.png" alt="cart icon" />
    </div>
  );
}
