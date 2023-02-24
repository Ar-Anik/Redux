const Button = ({ children, handler }) => {
  return (
    <div className="flex space-x-3">
      <button
        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        onClick={handler}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
