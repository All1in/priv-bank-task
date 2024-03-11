import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import { publicRoutes } from './pages.js'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route => (
                <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
