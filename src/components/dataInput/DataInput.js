import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import style from "./DataInput.module.css";
import shortid from 'shortid';
import contactsActions from "../../redux/phonebook-actions";

const DataInput = ({addUser}) => {

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

    const onHandleSubmit = (e) => {
        e.preventDefault();

        addUser({
            name: name,
            number: number,
            id: shortid.generate(),
        });

        setName('');
        setNumber('');
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
            <button type="submit" className={style.btn}>Add contact</button>
        </form>
    )
}

DataInput.propTypes = {
    addUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(contactsActions.addContact(user)),
});

export default connect(null, mapDispatchToProps)(DataInput);