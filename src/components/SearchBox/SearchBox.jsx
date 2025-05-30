import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

import { useId } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js"

export const SearchBox = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.filters.name);
    const inputId = useId();
  
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        };    

    return (
        <div>
            <label className={css.searchLabel} htmlFor={inputId}><FaSearch /> Find contacts by name</label>
            <input
                className={css.searchInput}
                id={inputId}
                type="text"
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}