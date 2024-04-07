import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '@/layout/Main';
import { AppRouteObject, getMenuModules } from '../utils';
const menuModuleRoutes = getMenuModules();
const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
export const DynamicRoutes: AppRouteObject = {
  path: '/',
  element: (
    <DashboardLayout />
  ),
  children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }, ...menuModuleRoutes],
};
