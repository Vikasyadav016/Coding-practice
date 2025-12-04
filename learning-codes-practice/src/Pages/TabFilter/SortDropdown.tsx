import "./SortDropdown.css";

const SortDropdown = ({ sortBy, setSortBy }:any) => {
  return (
    <select
      className="sort-dropdown"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
      <option value="A-Z">A → Z</option>
      <option value="Z-A">Z → A</option>
    </select>
  );
};

export default SortDropdown;
