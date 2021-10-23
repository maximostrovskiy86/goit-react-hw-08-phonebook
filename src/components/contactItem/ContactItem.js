import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import s from "./Contacts.module.css";

const ContactItem = ({name, id, number, onRemoveUser}) => {

    const remove = () => onRemoveUser(id);

    return (
        <li className={s.item}><span>{name}: </span>{number}
            <Button variant="warning" onClick={remove}>Delete</Button>
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