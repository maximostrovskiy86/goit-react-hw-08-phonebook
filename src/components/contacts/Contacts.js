import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import ContactItem from "../contactItem/ContactItem";
import {connect} from "react-redux";
import contactsOperations from "../../redux/phonebook/phonobook-operations";
import contactsSelector from "../../redux/phonebook/phonobook-selectors";

const Contacts = ({contacts, removeUser, fetchContacts}) => {

    useEffect(() => {
        fetchContacts();
    }, [])

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
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
    removeUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    contacts: contactsSelector.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    removeUser: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);