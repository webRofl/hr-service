import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestWrapper } from '@/components/common';
import Button from './Button';

describe('Button atom component', () => {
  test('render', () => {
    render(
      <TestWrapper.Default>
        <Button label="button" />
      </TestWrapper.Default>,
    );

    expect(screen.getByText('button')).toBeInTheDocument();
  });

  test('hide label', () => {
    render(
      <TestWrapper.Default>
        <Button label="button" isShowLabel={false} />
      </TestWrapper.Default>,
    );

    expect(screen.queryByText('button')).not.toBeInTheDocument();
  });
});
