const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="Search.svg" alt="search" />
        <input type="text" placeholder="Search" 
        value={searchTerm}
        onChange={(event)=>setsearchTerm(
          event.target.value
        )}>
        </input>
      </div>
    </div>
  )
}

export default Search;
