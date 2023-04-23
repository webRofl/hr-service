import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Center from './Center';

test('Center common component', () => {
  // eslint-disable-next-line react/no-children-prop
  render(<Center children={<span>foobar</span>} />);

  expect(screen.getByText('foobar')).toBeInTheDocument();
});
