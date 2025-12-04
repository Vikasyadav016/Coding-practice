import "./SearchBar.css";

const SearchBar = ({ search, setSearch }:any) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
