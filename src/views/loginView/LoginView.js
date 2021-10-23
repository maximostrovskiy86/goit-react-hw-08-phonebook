import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import style from "./LoginView.module.scss";
import {useDispatch} from "react-redux";
import authOperations from '../../redux/auth/auth-operations';

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}

const LoginView = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch (name) {
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

        dispatch(authOperations.logIn({email, password}))

        setEmail('');
        setPassword('');
    };

    return (
        <div style={styles.app}>
            <h1>Страница логина</h1>
            <form
                onSubmit={handleSubmit}
                className={style.form}
                autoComplete="off"
            >
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
                <Button type="submit" variant="primary">Войти</Button>
            </form>
        </div>
    );
}
export default LoginView;
