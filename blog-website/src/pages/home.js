import Blogs from "../components/blogs/blogs";
import Filter from "../components/filter/filter";
import Navbar from "../components/navbar";
const Home = () => {
  return (
    <>
      <Navbar />

      <section class="wrapper">
        <Filter />
        <Blogs />
      </section>
    </>
  );
};

export default Home;
