import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Menu, Content } from '../../organisms';

const Main: FC = () => {
  return (
    <Grid container>
      <Grid item lg={2}>
        <Menu />
      </Grid>
      <Grid item lg={10}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default Main;
