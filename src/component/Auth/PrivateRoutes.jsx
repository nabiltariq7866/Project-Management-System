import React, { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import AppContext from '../../context/AuthContext';

const PrivateRoutes = ({role,Element}) => {
            const context = useContext(AppContext);
            const auth=context.getLocalStorage("login");
            console.log(auth.role)
            console.log(auth.login)
    if (auth.login && role.includes(auth.role)) {
        console.log("enter")
        return Element;
    }
    console.log("here")
    return <Navigate to="/" replace />;
    
}

export default PrivateRoutes;
