import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OAuth from './OAuth';

describe('OAuth atom component', () => {
  test('render', () => {
    render(<OAuth href="google.com" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
