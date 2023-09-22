import React, { Component } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {

        let login = localStorage.getItem("login");
        if (login) {
            navigate("/login");

        }
    })
    return (
        <>
            <h1> This is Protected Page</h1>
            <Component />
        </>
    )
}

export default Protected;