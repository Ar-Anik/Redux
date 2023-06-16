import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";
import { useDispatch } from "react-redux";
import {
  likeThunk,
  unlikeThunk,
} from "../../features/likeUnlike/likeUnlikeThunk";
import { useState } from "react";

const LikeUnlike = ({ id, likes = 0, unlikes = 0 }) => {
  const [likeNumber, setLikeNumber] = useState(likes);
  const [unlikeNumber, setUnlikeNumber] = useState(unlikes);

  const dispatch = useDispatch();

  const handleLike = () => {
    likes = likeNumber + 1;
    dispatch(likeThunk({ id, likes })).then((response) => {
      if (response.type === "likeUnlike/likeThunk/fulfilled") {
        setLikeNumber(likes);
      }
    });
  };

  const handleUnlike = () => {
    unlikes = unlikeNumber + 1;
    dispatch(unlikeThunk({ id, unlikes })).then((response) => {
      if (response.type === "likeUnlike/unlikeThunk/fulfilled")
        setUnlikeNumber(unlikes);
    });
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={like}
            alt="Like"
            onClick={handleLike}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likeNumber}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={unlike}
            alt="Unlike"
            onClick={handleUnlike}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikeNumber}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
