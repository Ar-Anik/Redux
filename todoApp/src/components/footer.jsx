import { useDispatch, useSelector } from "react-redux";
import { statusChange, colorChange } from "../redux/filters/actionTypes";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { status, colors } = filters;
  console.log("Colors : ", colors);

  const handleStatus = (status) => {
    dispatch(statusChange(status));
  };

  const handleColor = (color) => {
    console.log("Color : ", color);
    if (colors.includes(color)) dispatch(colorChange(color, "remove"));
    else dispatch(colorChange(color, "add"));
  };

  const inCompletetodos = todos.filter((todo) => !todo.complete).length;

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {inCompletetodos === 0
          ? "No taks"
          : inCompletetodos === 1
          ? "1 task"
          : inCompletetodos + " tasks"}{" "}
        left
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatus("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatus("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatus("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColor("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColor("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColor("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
