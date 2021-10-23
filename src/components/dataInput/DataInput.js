import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import style from "./DataInput.module.scss";
import Button from 'react-bootstrap/Button';
import contactsOperations from "../../redux/phonebook/phonobook-operations";
import contactsSelector from "../../redux/phonebook/phonobook-selectors";

const DataInput = ({addUser, contacts, isLoadingContacts}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onHandleChange = e => {
        const {value, name} = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const isFind = () => contacts.some(item => item.name.toLowerCase() === name.toLowerCase());

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (isFind()) {
            alert(`${name} is already in contacts.`);
        } else {
            addUser({
                name: name,
                number: number,
            });

            setName('');
            setNumber('');
        }
    }

    return (
        <form className={style.form} onSubmit={onHandleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    className={style.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onHandleChange}
                    value={name}
                />
            </label>
            <label>
                Number:
                <input
                    type="tel"
                    name="number"
                    className={style.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={onHandleChange}
                    value={number}
                />
            </label>
            <Button type="submit" variant="success" className={style.btn}>Add contact </Button>
            {isLoadingContacts && <h2 className={style.title}>Загружаем...</h2>}
        </form>
    )
}

DataInput.propTypes = {
    addUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    contacts: contactsSelector.getContacts(state),
    isLoadingContacts: contactsSelector.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(contactsOperations.addContact(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);