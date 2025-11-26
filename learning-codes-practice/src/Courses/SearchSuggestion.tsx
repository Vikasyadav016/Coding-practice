const SearchSuggestions = ({ query, courses, onSelect }:any) => {
  if (!query) return null;

  const filtered = courses.filter((c:any) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="suggestions">
      {filtered.map((c:any) => (
        <div key={c._id} className="suggestion" onClick={() => onSelect(c)}>
          {c.title}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
