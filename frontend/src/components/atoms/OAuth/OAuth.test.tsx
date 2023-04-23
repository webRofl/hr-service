import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OAuth from './OAuth';

test('OAuth atom component', () => {
  render(<OAuth href="google.com" />);
  expect(screen.getByRole('link')).toBeInTheDocument();
});
