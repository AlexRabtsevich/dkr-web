import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import { RoutePath } from '@dkr-web/navigation';
import { TokenStorage } from '@dkr-web/common/services';
import { USER_QUERY } from '@dkr-web/gql';

import { useLogout } from '../../hooks';

const tokenStorage = new TokenStorage(localStorage);

export const Logout = () => {
  const [logout] = useLogout();
  const navigate = useNavigate();
  const client = useApolloClient();

  useEffect(() => {
    logout().then(() => {
      tokenStorage.removeAccessToken();
      tokenStorage.removeRefreshToken();
      navigate(RoutePath.Home);
      client.refetchQueries({ include: [USER_QUERY] });
    });
  }, [client, logout, navigate]);

  useEffect(() => {
    if (!tokenStorage.getAccessToken()) {
      navigate(RoutePath.Home);
    }
  }, [logout, navigate]);

  return null;
};
