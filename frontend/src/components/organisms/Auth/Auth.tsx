import { Container, Grid, Typography, Stack, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm, OAuthContainer } from 'components/molecules';
import * as SC from './Auth.style';

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

const Auth = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
      <SC.FullSizeGrid container justifyContent="center" alignItems="center">
        <Grid item sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}>
          <Grid
            container
            sx={{
              boxShadow: { sm: '0 0 5px #ddd' },
              py: '6rem',
              px: '1rem',
            }}>
            <Grid
              item
              container
              justifyContent="space-between"
              rowSpacing={5}
              sx={{
                maxWidth: { sm: '45rem' },
                marginInline: 'auto',
              }}>
              <Grid item xs={12} sm={6} sx={{ borderRight: { sm: '1px solid #ddd' } }}>
                <AuthForm />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OAuthContainer />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                  Need an account?
                  <LinkItem to="/sign-up"> Sign up here</LinkItem>
                </Typography>
                <Typography sx={{ fontSize: '0.9rem' }}>
                  <LinkItem to="/forgot-password">Forgot your password?</LinkItem>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </SC.FullSizeGrid>
    </Container>
  );
};

export default Auth;
