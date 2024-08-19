function Search({ search, setSearch }) {
  const searchChange = (value) => {
    if (value === "") {
      setSearch(null);
    } else {
      setSearch(value);
    }
  };
  return (
    <>
      <input
        placeholder="search projects"
        className="h-12 w-[60%] rounded-md border-[1px] border-zinc-700 bg-zinc-200 px-4 py-1 focus:border-[2px] font-body"
        value={search}
        onChange={(e) => searchChange(e.target.value)}
      />
      <button className="h-12 w-20 rounded-md bg-zinc-700 text-zinc-100">
        Search
      </button>
    </>
  );
}

export default Search;
