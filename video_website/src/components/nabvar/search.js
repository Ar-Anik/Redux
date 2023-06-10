import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchSelected } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const match = useMatch("/");

  console.log("match from search : ", match);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchSelected(input));

    if (match === null) navigate("/");
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={(event) => handleSearch(event)}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchIcon}
        alt="Search"
        onClick={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default Search;
