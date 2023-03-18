import { useSelector } from "react-redux";
import Todo from "./todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  const statusFilter = (todo) => {
    switch (status) {
      case "Complete":
        return todo.complete;
      case "Incomplete":
        return !todo.complete;
      default:
        return true;
    }
  };

  const colorFilter = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(statusFilter)
        .filter(colorFilter)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}

// {todos
//   .filter((todo) => {
//     switch (status) {
//       case "Complete":
//         return todo.complete;
//       case "Incomplete":
//         return !todo.complete;
//       default:
//         return true;
//     }
//   })
//   .filter((todo) => {
//     if (colors.length > 0) {
//       return colors.includes(todo?.color);
//     }
//     return true;
//   })
