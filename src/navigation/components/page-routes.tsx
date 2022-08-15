import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { protectedPageRoutes, publicPageRoutes } from '../routes';
import { ProtectedRoute } from './protected-route';

export const PageRoutes: FC = () => (
  <Routes>
    {publicPageRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
    <Route element={<ProtectedRoute />}>
      {protectedPageRoutes.map(({ path, element }) => (
        <Route path={path} key={path} element={element} />
      ))}
    </Route>
  </Routes>
);
