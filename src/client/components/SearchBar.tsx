interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar; 