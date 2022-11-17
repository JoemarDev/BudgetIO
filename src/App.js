import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/login.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './store/user/user.selector';
import { useEffect, useState } from 'react';
import { checkUserSession } from './store/user/user.action';
const App = () => {

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		dispatch(checkUserSession());
	},[]);

	useEffect(() => {
		navigate('/');
	},[currentUser]);
	
	return (
		<Routes>
			{currentUser === null 
				// Routes for un-login users
				?<Route path='/*' element={<Login/>}/>
				// Routes for login users
				:<Route path='/' element={<Navigation/>}>
					<Route index element={<Home/>}/>
				</Route>
			}
		</Routes>
	)
}

export default App;
