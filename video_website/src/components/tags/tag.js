import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagremoved } from "../../features/filter/filterSlice";
import { pageSelect } from "../../features/pagination/paginationSlice";

const Tag = ({ title }) => {
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const isStay = tags.indexOf(title);
  const style =
    isStay !== -1
      ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
      : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleTitle = () => {
    if (isStay === -1) {
      dispatch(tagSelected(title));
    } else {
      dispatch(tagremoved(title));
    }
    dispatch(pageSelect(1));
  };

  return (
    <div className={style} onClick={handleTitle}>
      {title}
    </div>
  );
};

export default Tag;
