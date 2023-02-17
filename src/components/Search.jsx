import React, { useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL,  } from "../api";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/auto-complete?q=${inputValue}`,geoApiOptions)
	.then(response => response.json())
	.then(response => {
        return {
            options: response.d.map(movie => {
                return {
                    value: `${movie.id}`,
                    label: `${movie.l}`,
                }
            })
        }
    })
	.catch(err => console.error(err));
  }

  const handleOnChange = (searhData) => {
    setSearch(searhData);
    onSearchChange(searhData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for a Movie"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
