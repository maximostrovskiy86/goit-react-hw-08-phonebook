import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelectors} from "../redux/auth";


const PrivateRoute = ({children, ...routeProps}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLogIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to="/login"/>}
        </Route>
    );
}

export default PrivateRoute;