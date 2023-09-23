const Navbar = () => {
  return (
    <div className="navbar-container">
      <span className="logo">Expanse Tracker</span>
      <ul className="navbar">
        <li>
          <a href="home.html">Home</a>
        </li>
        <li>
          <a href="chart.html">Graph</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
