import note from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import tick from "../assets/images/double-tick.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handlerInput = (event) => {
    setInput(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const handlerCompleted = () => {
    dispatch(allcompleted());
  };

  const handlerClear = () => {
    dispatch(clearcompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={(event) => handlerSubmit(event)}
      >
        <img src={note} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          onChange={(event) => handlerInput(event)}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handlerCompleted}
        >
          <img className="w-4 h-4" src={tick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handlerClear}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;