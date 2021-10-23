import {NavLink} from "react-router-dom";
import style from "./AuthNav.module.scss";
import React from "react";

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className={style.link}
            activeClassName={style.activeLink}
        >
            Регистрация
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={style.link}
            activeClassName={style.activeLink}
        >
            Логин
        </NavLink>
    </div>
);

export default AuthNav;