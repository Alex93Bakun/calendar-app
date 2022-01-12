import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';

interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RoutNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRoutes: IRoute[] = [
    { path: RoutNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
    { path: RoutNames.EVENT, element: Event },
];
