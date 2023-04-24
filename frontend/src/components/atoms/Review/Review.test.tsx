import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestWrapper } from '@/components/common';
import Review from './Review';

describe('Review atom component', () => {
  test('render', () => {
    render(
      <TestWrapper.Default>
        <Review isAuth isFirst rate={4.5} author={{ username: 'mike' }} text="text in the review" />
      </TestWrapper.Default>,
    );

    expect(screen.getByText('mike')).toBeInTheDocument();
    expect(screen.getByText('text in the review')).toBeInTheDocument();
  });
});
