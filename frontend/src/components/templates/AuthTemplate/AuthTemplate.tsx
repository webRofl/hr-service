import { Grid } from '@mui/material';
import React from 'react';
import { Auth } from 'components/organisms';

const AuthTemplate = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <Auth />
      </Grid>
    </Grid>
  );
};

export default AuthTemplate;
