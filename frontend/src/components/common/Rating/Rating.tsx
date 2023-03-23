import React, { FC, SyntheticEvent, useState } from 'react';
import { Popover, Rating as MUIRating, RatingProps, Tooltip } from '@mui/material';

interface RatingExtProps extends RatingProps {
  tip?: string;
}

const Rating: FC<RatingExtProps> = ({ tip, ...props }) => {
  if (tip) {
    return (
      <Tooltip title={tip} followCursor>
        <div>
          <MUIRating {...props} />
        </div>
      </Tooltip>
    );
  }

  return <MUIRating {...props} />;
};

export default Rating;
