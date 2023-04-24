import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { reviewsProjectCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { TestWrapper } from '@/components/common';
import WritableReview from './WritableReview';

describe('WritableReview atom component', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setIsWrite = (isWrite: boolean) => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const successCallback = () => {};

    render(
      <TestWrapper.Default>
        <WritableReview
          dataLoadCallback={reviewsProjectCreate}
          placeId="123"
          placeName="profile"
          setIsWrite={setIsWrite}
          successCallback={successCallback}
        />
      </TestWrapper.Default>,
    );
  });

  test('render', () => {
    expect(screen.getByText('cancel')).toBeInTheDocument();
  });
});
