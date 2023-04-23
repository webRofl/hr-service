import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorFallback from './ErrorFallback';

test('OAuth atom component', () => {
  render(<ErrorFallback error="my self made error" />);

  expect(screen.getByText('my self made error')).toBeInTheDocument();
});
