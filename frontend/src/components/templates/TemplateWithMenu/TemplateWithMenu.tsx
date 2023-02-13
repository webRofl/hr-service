import { Grid } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { Menu } from 'components/organisms';

const TemplateWithMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xl={1} lg={2} md={2} sm={1}>
        <Menu />
      </Grid>
      <Grid item xl={11} lg={10} md={10} sm={11}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TemplateWithMenu;
