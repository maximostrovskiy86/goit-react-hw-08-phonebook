import React from "react";
import style from "./Navigation.module.scss";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/auth";
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLogIn);

    return (
        <nav>
            <NavLink to="/" exact className={style.link} activeClassName={style.activeLink}>
                Главная
            </NavLink>
            {isLoggedIn && <NavLink
                to="/contacts"
                exact
                className={style.link}
                activeClassName={style.activeLink}
            >
                Книга контактов
            </NavLink>}
        </nav>
    );
}

export default Navigation;