import VideoPlayer from "../components/descriptions/videoPlayer";
import VideoDescriptions from "../components/descriptions/videoDescriptions";
import RelatedVideoList from "../components/list/relatedVideoList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import Message from "../utils/message";

const Video = () => {
  const { videoId } = useParams();
  const { isLoading, video, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { link, title } = video || {};

  let content;

  if (isLoading) content = <Message message={"Loading..."} />;
  else if (!isLoading && isError) content = <Message message={error} />;
  else if (!isLoading && !isError && !video?.id)
    content = <Message message={"Video not found."} />;
  else if (!isLoading && !isError && video?.id) {
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />

          <VideoDescriptions video={video} />
        </div>

        <RelatedVideoList />
      </div>
    );
  }

  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
};

export default Video;
