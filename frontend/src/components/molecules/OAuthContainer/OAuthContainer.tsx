import { Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { OAuth } from 'components/atoms';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as GitHubIcon } from 'assets/icons/github.svg';

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
          <GoogleIcon style={{ height: '2rem' }} />
          Google
        </OAuth>
        <OAuth href="">
          <GitHubIcon name="github" style={{ height: '2rem' }} />
          GitHub
        </OAuth>
      </Box>
    </>
  );
};

export default OAuthContainer;
