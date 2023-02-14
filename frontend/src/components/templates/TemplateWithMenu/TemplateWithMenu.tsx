import { Grid } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { Menu } from 'components/organisms';

const TemplateWithMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container>
      <Grid item>
        <Menu />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default TemplateWithMenu;
