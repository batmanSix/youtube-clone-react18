import { RouteObject, createHashRouter } from 'react-router-dom';

import { routes } from './routes';

const router: any = createHashRouter(routes as unknown as RouteObject[]);

export default router;
