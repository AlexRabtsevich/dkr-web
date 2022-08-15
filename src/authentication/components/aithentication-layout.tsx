import React, { FC, PropsWithChildren } from 'react';
import { Container, Grid, GridProps } from '@mui/material';

import { StyledBackgroundDiv, StyledFormWrapperDiv, StyledPageWrapperDiv } from './styles';

export const AuthenticationLayout: FC<PropsWithChildren<Pick<GridProps, 'xs' | 'sm' | 'md'>>> = (props) => {
  const { children, xs = 12, sm = 6, md = 4 } = props;

  return (
    <StyledBackgroundDiv>
      <StyledPageWrapperDiv>
        <Container>
          <Grid container item xs={12} justifyContent='center'>
            <Grid item xs={xs} md={md} sm={sm}>
              <StyledFormWrapperDiv>{children}</StyledFormWrapperDiv>
            </Grid>
          </Grid>
        </Container>
      </StyledPageWrapperDiv>
    </StyledBackgroundDiv>
  );
};
