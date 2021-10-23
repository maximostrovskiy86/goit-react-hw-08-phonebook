import style from "./ContactMenu.module.scss";
import avatar from "./login.jpeg"
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from "react-redux";
import {authSelectors, authOperations} from '../../redux/auth';

const ContactMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <div>
            <img src={avatar} alt="avatar" width="32" className={style.avatar} />
            <span className={style.name}>Добро пожаловать, {name}</span>
            <Button variant="danger" onClick={() => dispatch(authOperations.logOut())}>Выйти</Button>
        </div>
    );
}

export default ContactMenu;