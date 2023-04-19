import { ReviewCb, ReviewType } from '../../common/Reviews/Reviews.types';

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
