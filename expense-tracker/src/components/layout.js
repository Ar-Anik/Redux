import Navbar from "./header";
const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2023 Aubdur Rob Anik</div>
    </div>
  );
};

export default Layout;
