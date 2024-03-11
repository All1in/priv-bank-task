import React, { useContext, useState} from 'react';
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const LoginPageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 1em;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const FormButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const { login, setLoggedIn } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData.username); // Вхід в систему
        setLoggedIn(true);
        navigate('/');
    };

    return (
        <LoginPageContainer>
            <h2>Login Page</h2>
            <p>U should be verified first</p>
            <LoginForm onSubmit={handleSubmit}>
                <FormLabel htmlFor="username">Логін:</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />

                <FormLabel htmlFor="password">Пароль:</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <FormButton type="submit">Увійти</FormButton>
            </LoginForm>
        </LoginPageContainer>
    );
};

export default LoginPage;
