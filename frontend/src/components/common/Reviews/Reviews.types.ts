import {
  reviewsProfileCreate,
  reviewsProjectCreate,
} from '@/store/api/orvalGeneration/reviews/reviews';

export type ReviewType = 'project' | 'profile';

export type ReviewCb = typeof reviewsProfileCreate | typeof reviewsProjectCreate;
