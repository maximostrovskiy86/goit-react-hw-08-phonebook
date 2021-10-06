import React from "react";
import PropTypes from 'prop-types';
import style from "./Filter.module.css";

const Filter = ({filter, setFilter}) => {
    return (
        <>
            <label className={style.label}>
                Find contacts by name:
                <input
                    type="text"
                    name="filter"
                    className={style.input}
                    onChange={setFilter}
                    value={filter}
                />
            </label>
        </>
    );
}

Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
}

export default Filter;