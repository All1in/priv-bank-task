import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthButton = styled.div`
  button {
    background-color: #fff;
    color: #333;
    border: none;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
`;


const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <HeaderContainer>
            <NavBar />
            <AuthButton>
                {isLoggedIn ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </AuthButton>
        </HeaderContainer>
    );
};

export default Header;
