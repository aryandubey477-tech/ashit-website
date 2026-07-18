function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Ash it.
      </div>

      <div className="nav-links">
        <a href="#">About</a>
        <a href="#">FAQ</a>
      </div>

      <button className="buy-btn">
        Buy Now
      </button>
    </nav>
  );
}

export default Navbar;