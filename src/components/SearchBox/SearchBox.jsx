import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

export const SearchBox = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectNameFilter);
  
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        };    

    return (
        <div>
            <label className={css.searchLabel}><FaSearch /> Find contacts by name</label>
            <input
                className={css.searchInput}
                type="text"
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}