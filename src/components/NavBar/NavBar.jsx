import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-right: 15px;

      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;


const NavBar = () => {
    return (
        <Navigation>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </Navigation>
    );
};

export default NavBar;
