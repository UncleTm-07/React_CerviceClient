import React from "react";
import {PARTS_ROUTE} from "./utils/consts";
import PartsPage from "./components/Parts/PartsPage";

interface Route {
    path: string;
    Component: React.ComponentType;
}

// export const authRouter: Route[] = [
//     {
//         path: LOGIN_ROUTE,
//         Component: LoginForm
//     },
//     {
//         path: REGISTRATION_ROUTE,
//         Component: LoginForm
//     },
// ];
export const publicRoutes: Route[] = [
    {
        path: PARTS_ROUTE,
        Component: PartsPage
    },
];