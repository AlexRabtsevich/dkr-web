import { DashboardPage } from '@dkr-web/movie';
import { MyWishLists, WishList } from '@dkr-web/wish-list';

import { RoutePath } from './route-path';

export const protectedPageRoutes = [
  {
    path: RoutePath.Dashboard,
    element: <DashboardPage />,
  },
  {
    path: RoutePath.MyWishLists,
    element: <MyWishLists />,
  },
  {
    path: `${RoutePath.WishList}/:uuid`,
    element: <WishList />,
  },
];
