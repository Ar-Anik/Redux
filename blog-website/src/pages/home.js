import Blogs from "../components/blogs/blogs";
import Filter from "../components/filter/filter";
const Home = () => {
  return (
    <>
      <section className="wrapper">
        <Filter />
        <Blogs />
      </section>
    </>
  );
};

export default Home;
