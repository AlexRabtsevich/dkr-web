import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { RoutePath } from '../routes';
import { useUser } from '../../gql/hooks';

export const ProtectedRoute = () => {
  const { data, loading } = useUser();

  if (loading) {
    return null;
  }

  if (!data?.user) {
    return <Navigate to={RoutePath.Login} replace />;
  }

  return <Outlet />;
};
