import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { DynamicRoutes } from './dynamic-routes';
import { ErrorRoutes } from './error-routes';

import { AppRouteObject } from '../utils';


export const PAGE_NOT_FOUND_ROUTE: AppRouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

export const routes = [DynamicRoutes, ErrorRoutes, PAGE_NOT_FOUND_ROUTE];
