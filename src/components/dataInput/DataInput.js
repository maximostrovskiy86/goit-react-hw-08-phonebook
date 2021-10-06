import React, {Component} from "react";
import PropTypes from 'prop-types';
import style from "./DataInput.module.css";
import shortid from 'shortid';

class DataInput extends Component {
    state = {
        name: '',
        number: '',
    }

    onHandleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        if (this.props.isContactExist(this.state.name)) {
            alert(`${this.state.name} is already in contacts.`);
            return;
        }

        this.props.addUser({
            name: this.state.name,
            number: this.state.number,
            id: shortid.generate(),
        })

        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        return (
            <form className={style.form} onSubmit={this.onHandleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        className={style.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.onHandleChange}
                        value={this.state.name}
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
                        onChange={this.onHandleChange}
                        value={this.state.number}
                    />
                </label>
                <button type="submit" className={style.btn}>Add contact</button>
            </form>
        )
    }
}

DataInput.propTypes = {
    addUser: PropTypes.func.isRequired,
}

export default DataInput;