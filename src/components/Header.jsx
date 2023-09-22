import { header, logo, imageLink } from "./Header.module.css";

export default function Header() {
  return (
    <div className={header}>
      <img className={logo} src="/amazon-logo.png" alt="Amazon logo" />
      <ul>
        <li>All</li>
        <li>Today&apos;s Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
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
