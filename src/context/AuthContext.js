import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
