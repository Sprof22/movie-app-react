import React, { useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const SearchAsync = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/auto-complete?s=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
            options: response.d.map((movie)=> {
                return {
                    value: `${movie.l}`,
                    label: `${movie.l}`,
                }
            })
        }
    })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
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

export default SearchAsync;
