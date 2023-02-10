import { Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { OAuth } from 'components/atoms';
import { Icon } from 'components/common';

const OAuthContainer: FC = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="p"
        sx={{
          paddingLeft: { sm: '3rem' },
          mb: '1.5rem',
          textAlign: 'center',
        }}>
        Log in with another provider:
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ paddingLeft: { sm: '3rem' }, rowGap: '1rem' }}>
        <OAuth href="">
          <Icon name="google" style={{ height: '2rem' }} />
          Google
        </OAuth>
        <OAuth href="">
          <Icon name="github" style={{ height: '2rem' }} />
          GitHub
        </OAuth>
      </Box>
    </>
  );
};

export default OAuthContainer;
