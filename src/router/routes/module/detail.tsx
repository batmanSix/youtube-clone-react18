import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AppRouteObject } from '../../utils';

const HomePage = lazy(() => import(`@/pages/detail`));

const demo: AppRouteObject = {
  order: 1,
  path: '/',
  element: (
    <Suspense fallback={<div>加载中</div>}>
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
      element: <Navigate to="detail" replace />,
    },
    {
      path: 'detail',
      element: <HomePage />,
      meta: { label: 'sys.menu.demo', key: '/detail' },
    },
  ],
};

export default demo;
