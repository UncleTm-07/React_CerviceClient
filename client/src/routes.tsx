import React from "react";
import {ACCESSORIES_ROUTE, CONFIGURATOR_ROUTE, PARTS_ROUTE, PC_ROUTE} from "./utils/consts";
import PartsPage from "./components/Parts/PartsPage";
import PeripheryPage from "./components/Periphery/PeripheryPage";
import ComputerPage from "./components/Computers/ComputerPage";
import DesignerPage from "./components/Designer/DesignerPage";

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
    {
        path: ACCESSORIES_ROUTE,
        Component: PeripheryPage
    },
    {
        path: PC_ROUTE,
        Component: ComputerPage
    },
    {
        path: CONFIGURATOR_ROUTE,
        Component: DesignerPage
    },
];