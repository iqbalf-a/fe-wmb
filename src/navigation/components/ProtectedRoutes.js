import {Navigate, Outlet} from "react-router-dom";
import constants from "../../constants";
import NavBarComp from "../../components/NavBar";
import React from "react";
import {getToken} from "../../utils/token";

const ProtectedRoutes = ({isLoggedIn, setIsloggedIn}) => {
    const token = getToken();

    if (!token) {
        return <Navigate to={constants.ROUTES.LOGIN} replace={true}/>
    }

    return (
        <>
            <NavBarComp setIsLoggedIn={setIsloggedIn}/>
            <Outlet/>
        </>
    )
}

export default ProtectedRoutes