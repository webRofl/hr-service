import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestWrapper } from '@/components/common';
import FormInput from './FormInput';

describe('FormInput atom component', () => {
  beforeEach(() => {
    render(
      <TestWrapper.WithForm defaultValues={{ input: '' }}>
        <FormInput name="input" data-testid="testid" />
      </TestWrapper.WithForm>,
    );
  });

  test('render', () => {
    expect(screen.getByPlaceholderText('Type your Input')).toBeInTheDocument();
  });

  test('typing', () => {
    const input = screen.getByPlaceholderText('Type your Input');

    expect(input).not.toContainHTML('123');

    fireEvent.input(input, {
      target: {
        value: '123',
      },
    });

    expect(screen.getByTestId('testid')).toContainHTML('123');
  });
});
