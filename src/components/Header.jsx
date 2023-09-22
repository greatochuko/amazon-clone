export default function Header() {
  return (
    <div>
      <img src="/amazon-logo.png" alt="Amazon logo" />
      <ul>
        <li>All</li>
        <li>Today&apos;s Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        <form>
          <input type="text" placeholder="Search Amazon" />
          <button type="submit">
            <img src="search-icon.png " alt="search icon" />
          </button>
        </form>
      </ul>
    </div>
  );
}
