import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <span>LexEstates</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
