import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooke';
import { RootState } from '../redux';


type ProtectedRouteProps = {
	element: React.ReactElement;
	allowedRoles: string[];
};

const Protected: FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
	const dispatch = useAppDispatch();
	const { data } = useAppSelector((state: RootState) => state.user);

	
	if (!data) {
		return <Navigate to="/adminLogin" replace />;
	}

	console.log('protect',data.role)
    
	const userRole = data.role || '';
	if (allowedRoles.includes(userRole)) {
        console.log('yessss----------------------');
		return element; 
	} else {
		return <Navigate to="/not-authorized" replace />;
	}
};

export default Protected;
