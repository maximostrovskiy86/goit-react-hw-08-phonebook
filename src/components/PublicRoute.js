import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {authSelectors} from "../redux/auth";

const PublicRoute = ({children, restricted = false, redirectTo = "/", ...routeProps}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLogIn);
    const shouldRedirect = isLoggedIn && restricted;

    return (
        <Route{...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo}/> : children}
        </Route>
    );
}

export default PublicRoute;