import { ReviewCb, ReviewType } from '@/components/common/Reviews/Reviews.types';
import { Review } from '@/store/api/orvalGeneration/models';

interface StyleProps {
  isAuth: boolean;
  isFirst: boolean;
}

export type ReviewProps = Review & StyleProps;

export interface WritableReviewProps {
  placeId: string;
  placeName: ReviewType;

  successCallback: () => void;
  dataLoadCallback: ReviewCb;
  setIsWrite: (isWrite: boolean) => void;
}

export interface FormState {
  reviewText: string;
}
