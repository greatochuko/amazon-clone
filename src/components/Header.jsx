import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/?q=${query}`);
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="/amazon-logo.png" alt="Amazon logo" />
      </Link>
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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Amazon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <img src="/search-icon.png " alt="search icon" />
        </button>
      </form>
      <img className={styles.imageLink} src="/user-icon.png" alt="user icon" />
      <Link to="/cart" className={styles.cart}>
        <img
          className={styles.imageLink}
          src="/cart-icon.png"
          alt="cart icon"
        />
        <p>{cart.length}</p>
      </Link>
    </div>
  );
}
