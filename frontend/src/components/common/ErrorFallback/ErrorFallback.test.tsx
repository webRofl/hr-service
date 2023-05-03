import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorFallback from './ErrorFallback';

test('OAuth atom component', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<ErrorFallback error={new Error('my self made error')} resetErrorBoundary={() => {}} />);

  expect(screen.getAllByTestId('error-fallback-testid')[0]).toContainHTML('my self made error');
});
