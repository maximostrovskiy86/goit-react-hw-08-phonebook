import React from "react";
import PropTypes from 'prop-types';
import s from "../Contacts.module.css";

const ContactItem = ({name, id, number, onRemoveUser}) => {

    const remove = () => onRemoveUser(id);

    return (
        <li className={s.item}><span>{name}: </span>{number}
            <button type="button" className={s.button} onClick={remove}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
}

export default ContactItem;