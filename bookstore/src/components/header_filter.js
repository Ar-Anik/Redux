import { useSelector, useDispatch } from "react-redux";
import { stateChange } from "../redux/filter/actionType";

const HeaderFilter = () => {
  const status = useSelector((state) => state.filterBook.status);
  const dispatch = useDispatch();

  const handleStatus = (value) => {
    dispatch(stateChange(value));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${status === "All" && "active-filter"}`}
            id="lws-filterAll"
            onClick={() => handleStatus("All")}
          >
            All
          </button>
          <button
            className={`filter-btn ${status === "Featured" && "active-filter"}`}
            id="lws-filterFeatured"
            onClick={() => handleStatus("Featured")}
          >
            Featured
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderFilter;
