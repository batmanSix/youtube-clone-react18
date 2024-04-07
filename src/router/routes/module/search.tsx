import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { SvgIcon } from '@/components/Icon';
// import { CircleLoading } from '@/components/CircleLoading';

import { AppRouteObject } from '../../utils';

const HomePage = lazy(() => import(`@/pages/search`));

const demo: AppRouteObject = {
  order: 1,
  path: '/',
  element: (
    <Suspense fallback={<div></div>}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.dashboard',
    // icon: <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />,
    key: '/dashboard',
  },
  children: [
    {
      index: true,
      element: <Navigate to="search" replace />,
    },
    {
      path: 'search',
      element: <HomePage />,
      meta: { label: 'sys.menu.demo', key: '/search' },
    },
  ],
};

export default demo;
