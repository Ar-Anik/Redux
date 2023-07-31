import { useDispatch, useSelector } from "react-redux";
import { sortSeleted } from "../../features/filterSlice/filterSlice";
import { useState } from "react";

const DropdownFilter = () => {
  const { sort } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const [sortFilter, setSortFilter] = useState(sort);

  const handleSort = (event) => {
    setSortFilter(event.target.value);
    dispatch(sortSeleted(event.target.value));
  };

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={(event) => handleSort(event)}
        value={sortFilter}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
