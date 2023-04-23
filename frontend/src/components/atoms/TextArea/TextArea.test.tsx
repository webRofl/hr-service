import { render, screen, fireEvent } from '@testing-library/react';
import { TestWrapper } from '@/components/common';
import TextArea from './TextArea';
import '@testing-library/jest-dom';

describe('TextArea atom component', () => {
  beforeEach(() => {
    render(
      <TestWrapper defaultValues={{ text: '' }}>
        <TextArea name="text" />
      </TestWrapper>,
    );
  });

  test('render', () => {
    expect(screen.getByTestId('testid')).toBeInTheDocument();
  });

  test('typing', () => {
    expect(screen.getByTestId('testid')).not.toContainHTML('some value');

    fireEvent.input(screen.getByTestId('testid'), {
      target: {
        value: '123',
      },
    });

    expect(screen.getByTestId('testid')).toHaveValue('123');
  });
});
