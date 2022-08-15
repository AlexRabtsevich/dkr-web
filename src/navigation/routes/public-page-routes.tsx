import { MovieDetails, SearchPage } from '@dkr-web/movie';
import { Login, Logout, Registration } from '@dkr-web/authentication';

import { RoutePath } from './route-path';

export const publicPageRoutes = [
  {
    path: RoutePath.Login,
    element: <Login />,
  },
  {
    path: RoutePath.Registration,
    element: <Registration />,
  },
  {
    path: `${RoutePath.Movie}/:id`,
    element: <MovieDetails />,
  },
  {
    path: RoutePath.Home,
    element: <SearchPage />,
  },
  {
    path: RoutePath.Logout,
    element: <Logout />,
  },
];
