import DropdownFilter from "./dropdownFilter";
import RadioFilter from "./radiofilter";

const Filter = () => {
  return (
    <aside>
      <div class="sidebar-items">
        <DropdownFilter />
        <RadioFilter />
      </div>
    </aside>
  );
};

export default Filter;
