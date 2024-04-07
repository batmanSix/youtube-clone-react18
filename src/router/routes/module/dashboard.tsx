import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { SvgIcon } from '@/components/Icon';
// import { CircleLoading } from '@/components/CircleLoading';

import { AppRouteObject } from '../../utils';

const HomePage = lazy(() => import(`@/pages/home`));


const dashboard: AppRouteObject = {
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
    // {
    //   index: true,
    //   element: <Navigate to="workbench" replace />,
    // },
    {
      path: 'workbench',
      element: <HomePage />,
      meta: { label: 'sys.menu.workbench', key: '/dashboard/workbench' },
    },
  ],
};

export default dashboard;
