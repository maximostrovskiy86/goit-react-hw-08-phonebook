import React from 'react';
import style from "./NavBar.module.scss";
import {useSelector} from "react-redux";
import Navigation from '../navigation/Navigation';
import ContactMenu from '../contactMenu/ContactMenu';
import AuthNav from '../authNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';

const NavBar = () => {
    const isAuthenticated = useSelector(authSelectors.getIsLogIn);

    return (
        <header className={style.header}>
            <Navigation/>
            {isAuthenticated ? <ContactMenu/> : <AuthNav/>}
        </header>
    );
}

export default NavBar;
