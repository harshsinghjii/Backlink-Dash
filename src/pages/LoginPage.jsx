import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    function login() {
        localStorage.setItem("login", true);
        navigate("/dashboard");
    }

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <>
            <h1>Registration</h1>
            <input type='text' placeholder='Enter Your Name' />
            <input type='password' placeholder='Enter your password' />
            <button onClick={login}>
                Login
            </button>
        </>
    )
}

export default LoginPage;
