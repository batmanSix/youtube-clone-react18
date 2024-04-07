import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

// import { CircleLoading } from '@/components/CircleLoading';
// import SimpleLayout from '@/layouts/Simple';

import { AppRouteObject } from '../utils';

// const Page403 = lazy(() => import('@/pages/sys/error/Page403'));
// const Page404 = lazy(() => import('@/pages/sys/error/Page404'));
// const Page500 = lazy(() => import('@/pages/sys/error/Page500'));

/**
 * error routes
 * 403, 404, 500
 */
export const ErrorRoutes: AppRouteObject = {
  element: (

    <Suspense fallback={<div />}>
      <Outlet />
    </Suspense>

  ),
  children: [
    // { path: '403', element: <Page403 /> },
    // { path: '404', element: <Page404 /> },
    // { path: '500', element: <Page500 /> },
  ],
};
