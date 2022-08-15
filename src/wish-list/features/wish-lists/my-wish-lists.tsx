import { Box, Card, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PageHeader, StyledPageContainer } from '@dkr-web/common/components';
import { usePaginationPage } from '@dkr-web/common/hooks';
import { Span, Subtitle } from '@dkr-web/ui-kit';
import { RoutePath } from '@dkr-web/navigation';

import { useWishLists } from '../../hooks';
import { WishListCreation, WishListDeletion } from '../../components';
import { WishListDetailsButton, WishListMovie } from './components';

export const MyWishLists = () => {
  const [page, setPage] = usePaginationPage();
  const { data, refetch } = useWishLists({ variables: { page } });
  const navigate = useNavigate();

  return (
    <StyledPageContainer maxWidth='md'>
      <PageHeader title='My wish lists' onClose={() => navigate(RoutePath.Home)}>
        <WishListCreation onWishListCreated={() => refetch({ page })} />
      </PageHeader>
      <Stack spacing={2}>
        {data?.wishLists.results.map(({ title, uuid, movies }) => (
          <Card key={uuid}>
            <Subtitle gutterBottom>{title}</Subtitle>
            <Stack direction={{ md: 'row', sm: 'column', xs: 'column' }} justifyContent='space-between'>
              <Box sx={{ width: 'auto', height: { md: 108, sm: 24, xs: 24 }, display: 'flex' }}>
                {movies.results.length ? (
                  movies.results.map((movie) => (
                    <WishListMovie key={movie.id} id={movie.id} imageSrc={movie.posterPath} />
                  ))
                ) : (
                  <Span>There are not movies yet</Span>
                )}
              </Box>
              <Stack
                alignItems={{ md: 'flex-start', sm: 'center', xs: 'center' }}
                justifyContent={{ md: 'flex-start', sm: 'center', xs: 'center' }}
                direction={{ md: 'column', sm: 'row', xs: 'row' }}
              >
                <WishListDeletion wishListUuid={uuid} onWishListDeleted={() => refetch({ page })} />
                <WishListDetailsButton wishListUuid={uuid} />
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
    </StyledPageContainer>
  );
};
