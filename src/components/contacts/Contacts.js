import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "./contactItem/ContactItem";
import {connect} from "react-redux";
import s from "./Contacts.module.css";
import contactsActions from "../../redux/phonebook-actions";

const Contacts = ({contacts, filterInputHandler, removeUser}) => {

    // const remove = () => removeUser(filterInputHandler.id);

    return (
        <>
            {contacts.length > 0 && (
                <ul>
                    {contacts.map(({id, name, number}) => (
                        <ContactItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            onRemoveUser={() => removeUser(id)}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

Contacts.propTypes = {
    filterInputHandler: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
    removeUser: PropTypes.func.isRequired,
}

const filterInputHandler = (allContacts, filter) => allContacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()));


const mapStateToProps = ({contacts: {items, filter}}) => ({
    contacts: filterInputHandler(items, filter)
});

const mapDispatchToProps = dispatch => ({
    removeUser: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);