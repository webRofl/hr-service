import { Grid } from '@mui/material';
import React, { FC } from 'react';
import * as SC from './AbstractForm.style';

interface AbstractFormProps {
  renderLeft: FC<unknown>;
  renderRight: FC<unknown>;
  renderBottom?: FC<unknown>;
  isBigForm?: boolean;
}

const AbstractForm: FC<AbstractFormProps> = ({
  renderLeft,
  renderRight,
  renderBottom,
  isBigForm = false,
}) => {
  return (
    <SC.FullSizeGrid container>
      <SC.ComponentContainer isBigForm={isBigForm} item>
        <SC.ContentGrid item container rowSpacing={5}>
          <SC.FormContainer item xs={12} sm={6}>
            {renderLeft}
          </SC.FormContainer>
          <Grid item xs={12} sm={6}>
            {renderRight}
          </Grid>
        </SC.ContentGrid>
        {renderBottom}
      </SC.ComponentContainer>
    </SC.FullSizeGrid>
  );
};

export default AbstractForm;
