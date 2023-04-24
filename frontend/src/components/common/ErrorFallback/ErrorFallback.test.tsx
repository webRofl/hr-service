import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorFallback from './ErrorFallback';

test('OAuth atom component', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<ErrorFallback error={new Error('my self made error')} resetErrorBoundary={() => {}} />);

  expect(screen.getByText('my self made error')).toBeInTheDocument();
});
