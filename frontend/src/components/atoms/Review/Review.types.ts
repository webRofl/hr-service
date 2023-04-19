import { Review } from '@/store/api/orvalGeneration/models';

interface StyleProps {
  isAuth: boolean;
  isFirst: boolean;
}

export type ReviewProps = Review & StyleProps;
