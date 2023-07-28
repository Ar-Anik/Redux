import blogLogo from "../images/LWSBlog.svg";
const Navbar = () => {
  return (
    <nav class="py-4 border-b">
      <div class="navbar-container">
        <div class="logo">
          <a href="index.html">
            <img src={blogLogo} alt="search" />
          </a>
        </div>
        <div class="auth-buttons">
          <button class="btn btn-primary">sign in</button>
          <button class="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
