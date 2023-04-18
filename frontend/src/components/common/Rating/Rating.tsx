import React, { FC } from 'react';
import { Rating as MUIRating, RatingProps, Tooltip } from '@mui/material';
import * as SC from './Rating.style';

interface RatingExtProps extends RatingProps {
  tip?: string;
  totalVotes?: number;
}

const Rating: FC<RatingExtProps> = ({ tip, totalVotes, ...props }) => {
  if (tip) {
    return (
      <Tooltip title={tip} followCursor>
        <SC.Container>
          <MUIRating {...props} />
          {totalVotes && <span>{totalVotes}</span>}
        </SC.Container>
      </Tooltip>
    );
  }

  return <MUIRating {...props} />;
};

export default Rating;
