import { lazy } from 'react';

const routes = [
  {
    path: '/',
    element: lazy(() => import('@/pages/home')),
  },
];

export default routes;
