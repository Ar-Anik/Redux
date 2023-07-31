import DropdownFilter from "./dropdownFilter";
import RadioFilter from "./radiofilter";

const Filter = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <DropdownFilter />
        <RadioFilter />
      </div>
    </aside>
  );
};

export default Filter;
