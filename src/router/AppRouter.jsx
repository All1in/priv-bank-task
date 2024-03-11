import React, {useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import { privateRoutes, publicRoutes } from './pages.js'
import { AuthContext } from "../context/AuthContext.jsx";

const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext);
    console.log('isLoggedIn:', isLoggedIn)
    return (
        <Routes>
            {isLoggedIn
                ? privateRoutes.map(route => (
                    <Route element={<route.element />} path={route.path} key={route.path} />
                ))
                : publicRoutes.map(route => (
                    <Route element={<route.element />} path={route.path} key={route.path} />
                ))}
            <Route path="*" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;
