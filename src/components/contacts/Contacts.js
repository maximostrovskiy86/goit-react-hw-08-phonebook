import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "./contactItem/ContactItem";

const Contacts = ({filterInputHandler, removeUser}) => {

    return (
        <ul>
            {filterInputHandler.map(user => (
                <ContactItem user={user} key={user.id} removeUser={removeUser}/>
            ))}
        </ul>
    );
}

Contacts.propTypes = {
    filterInputHandler: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
    removeUser: PropTypes.func.isRequired,
}


export default Contacts;