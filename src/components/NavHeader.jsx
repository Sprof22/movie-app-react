import React from 'react'

const NavHeader = ({search}, {arr}, {getData}, {searchMovie}, {setSearch}) => {
  return (
    <div className="header">
          <img src="images/movie-icon.png" alt="logo" className="w-15 h-12 cursor-pointer" />
          <nav>
            <ul>
              {arr.map((value) => {
                return (
                  <li>
                    <a
                      href="#"
                      name={value}
                      onClick={(e) => {
                        getData(e.target.name);
                      }}
                    >
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <form>
            <div className="search-btn">
              <input
                type="text"
                placeholder="Enter Movie Name"
                className="inputText"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                onKeyPress={searchMovie}
              />
              <button type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
  )
}

export default NavHeader