import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Redirect,} from 'react-router-dom';
import {authOperations} from "../redux/auth/";
import {useDispatch} from "react-redux";
import Container from "./container/Container";
import NavBar from "./navBar/NavBar";
import HomeView from "../views/HomeView";
import RegisterView from "../views/registerView/RegisterView";
import LoginView from "../views/loginView/LoginView";
import ContactsView from "../views/ContactsView";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <NavBar/>
            <Switch>
                <PublicRoute exact path="/">
                    <HomeView/>
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                    <RegisterView/>
                </PublicRoute>
                <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                    <LoginView/>
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                    <ContactsView/>
                </PrivateRoute>
                <Redirect to="/"/>
            </Switch>
        </Container>
    );
}

export default App;
