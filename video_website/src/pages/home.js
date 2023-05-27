import TagList from "../components/tags/tagList";
import VideoGrid from "../components/grid/videoGrid";
import Pagination from "../components/footer/paginations";

const Home = () => {
  return (
    <>
      <TagList />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
