import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import NavBar from "../NavBar/NavBar.jsx";

const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <header>
            <NavBar />
            <div>
                {isLoggedIn ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
