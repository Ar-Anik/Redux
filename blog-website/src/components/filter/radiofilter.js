import { useDispatch, useSelector } from "react-redux";
import { filterSeleted } from "../../features/filterSlice/filterSlice";
import { useState } from "react";

const RadioFilter = () => {
  const { filter } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const [radioFilter, setRadioFilter] = useState(filter);

  const handleSelectTag = (event) => {
    setRadioFilter(event.target.value);
    dispatch(filterSeleted(event.target.value));
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            className="radio"
            checked={radioFilter === "all"}
            onChange={(event) => handleSelectTag(event)}
            value={"all"}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            checked={radioFilter === "saved"}
            className="radio"
            onChange={(event) => handleSelectTag(event)}
            value={"saved"}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default RadioFilter;
