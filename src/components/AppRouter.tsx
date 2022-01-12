import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes, RoutNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
    const { isAuth } = useTypedSelector((state) => state.auth);

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
            ))}
            <Route
                path={RoutNames.LOGIN}
                element={<Navigate replace to={RoutNames.EVENT} />}
            />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
            ))}
            <Route
                path={RoutNames.EVENT}
                element={<Navigate replace to={RoutNames.LOGIN} />}
            />
        </Routes>
    );
};

export default AppRouter;
