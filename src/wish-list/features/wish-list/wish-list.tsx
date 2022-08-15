import { useNavigate, useParams } from 'react-router-dom';
import { Box, Card, Stack } from '@mui/material';

import { PageHeader, StyledPageContainer } from '@dkr-web/common/components';
import { RoutePath } from '@dkr-web/navigation';
import { usePaginationPage } from '@dkr-web/common/hooks';
import { Subtitle } from '@dkr-web/ui-kit';

import { useWishList } from '../../hooks';
import { WishListDeletion } from '../../components';
import { MoviesTable, WishListTitle } from './components';
import defaultImgSrc from '../../../templates/images/movie-palceholder.svg';

export const WishList = () => {
  const params = useParams<{ uuid: string }>();
  const [moviesPage, setMoviesPage] = usePaginationPage();
  const { data, refetch } = useWishList({ variables: { wishListUuid: params.uuid || '', moviesPage } });
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  return (
    <StyledPageContainer>
      <PageHeader
        title={
          <WishListTitle
            wishListTitle={data.wishList.title}
            wishListUuid={data.wishList.uuid}
            onUpdated={() => refetch({ wishListUuid: params.uuid || '', moviesPage })}
          />
        }
        onClose={() => navigate(RoutePath.MyWishLists)}
      >
        <WishListDeletion wishListUuid={params.uuid || ''} onWishListDeleted={() => navigate(RoutePath.Home)} />
      </PageHeader>
      <MoviesTable
        wishListUuid={data.wishList.uuid}
        movies={data.wishList.movies}
        onPageChange={setMoviesPage}
        onMovieDeleted={() => refetch({ wishListUuid: params.uuid || '', moviesPage })}
      />
    </StyledPageContainer>
  );
};
