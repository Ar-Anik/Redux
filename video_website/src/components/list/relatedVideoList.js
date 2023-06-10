import RelatedVideoListItem from "./relatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Message from "../../utils/message";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const { isLoading, relatedVideos, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  let content = null;

  if (isLoading) content = <Message message={"Loading..."} />;
  else if (!isLoading && isError && error) {
    content = <Message message={error} />;
  } else if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <Message message={"Video Not Found."} />;
  } else if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
