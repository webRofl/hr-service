import { AbstractForm } from '@/components/common';
import { CreateProfileForm } from '@/components/organisms';
import { Box } from '@mui/material';
import React, { FC } from 'react';

const CreateProfileTemplate: FC = () => {
  return (
    <AbstractForm
      heightException={0}
      renderLeft={<CreateProfileForm />}
      renderRight={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          left side
        </Box>
      }
      isBigForm
    />
  );
};

export default CreateProfileTemplate;
