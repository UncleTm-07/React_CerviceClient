import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((x) => (
                <Route
                    key={x.path}
                    path={x.path}
                    element={<x.Component/>}
                />
            ))}
        </Routes>

    );
};

export default AppRouter;