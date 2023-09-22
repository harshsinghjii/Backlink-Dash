import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BacklinkListPage from './pages/BacklinkListPage';
import BacklinkDetailPage from './pages/BacklinkDetailPage';
import { auth } from './config/firebase';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './protect/Protected';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <Route
            {...rest}
            element={user ? <Component /> : <Navigate to="/" />}
        />
    );
};

const Router = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setInitializing(false);
        });

        return unsubscribe;
    }, []);

    if (initializing) return <div>Loading...</div>;

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/user" element={<Protected Component={Dashboard} />} />
                {/* <PrivateRoute path="/backlinks" component={BacklinkListPage} />
                <PrivateRoute path="/backlinks/:id" component={BacklinkDetailPage} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
