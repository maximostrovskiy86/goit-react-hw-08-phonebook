import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeFilter} from "../../redux/phonebook/phonebook-actions";
import contactsSelector from "../../redux/phonebook/phonobook-selectors";
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

const mapDispatchToProps = dispatch => ({
    setFilter: (e) => dispatch(changeFilter(e.target.value)),
});

const mapStateToProps = state => ({
    value: contactsSelector.getFilter(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);