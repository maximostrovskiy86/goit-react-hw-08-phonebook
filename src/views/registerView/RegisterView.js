import React, {useState} from 'react';
import style from "./registerView.module.scss";
import {useDispatch} from "react-redux";
import authOperations from '../../redux/auth/auth-operations';
import Button from "react-bootstrap/Button";

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}

const RegisterView = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperations.register({name, email, password}));
        // onRegister(this.state);

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div style={styles.app}>
            <h1>Страница регистрации</h1>

            <form
                onSubmit={handleSubmit}
                className={style.form}
                autoComplete="off"
            >
                <label className={style.label}>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className={style.input}
                        onChange={handleChange}
                    />
                </label>

                <label className={style.label}>
                    Почта
                    <input
                        type="email"
                        name="email"
                        value={email}
                        className={style.input}
                        onChange={handleChange}
                    />
                </label>

                <label className={style.label}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        className={style.input}
                        onChange={handleChange}
                    />
                </label>
                <Button type="submit" variant="primary">Зарегистрироваться</Button>
                {/*<button type="submit" className={style.btn}>Зарегистрироваться</button>*/}
            </form>
        </div>
    );
}
export default RegisterView;
