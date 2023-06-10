import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./videoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Message from "../../utils/message";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, videos, isError, error } = useSelector(
    (state) => state.videos
  );

  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  let content;

  if (isLoading) content = <Message message={"Loading..."} />;
  else if (isError && error) content = <Message message={error} />;
  else if (!isLoading && !isError && !error && videos.length === 0)
    content = <Message message={"Video Not Found."} />;
  else if (!isLoading && !isError && !error && videos.length > 0)
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;