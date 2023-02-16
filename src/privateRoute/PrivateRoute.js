import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    // console.log(user);

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;