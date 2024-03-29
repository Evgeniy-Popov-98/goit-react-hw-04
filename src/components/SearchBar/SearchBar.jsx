const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { search } = form.elements;
    onSubmit(search.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
