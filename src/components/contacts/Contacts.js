import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from "react-redux";
import ContactItem from "../contactItem/ContactItem";
import {contactsOperations, contactsSelector} from "../../redux/phonebook";

const Contacts = () => {
    const contacts = useSelector(contactsSelector.getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch])

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
                            onRemoveUser={() => dispatch(contactsOperations.deleteContact(id))}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}
export default Contacts;