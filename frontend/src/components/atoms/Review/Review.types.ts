import { Review } from '@/store/api/orvalGeneration/models';

interface StyleProps {
  isAuth: boolean;
  isFirst: boolean;
}

export type ReviewProps = Review & StyleProps;

export interface WritableReviewProps {
  placeId: string;

  successCallback: () => void;
  setIsWrite: (isWrite: boolean) => void;
}

export interface FormState {
  reviewText: string;
}
