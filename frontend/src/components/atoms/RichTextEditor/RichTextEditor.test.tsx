import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestWrapper } from '@/components/common';
import RichTextEditor from './RichTextEditor';

describe('RichTextEditor atom component', () => {
  test('render', () => {
    render(
      <TestWrapper.WithForm defaultValues={{ text: '' }}>
        <RichTextEditor isEdit={false} name="text" />
      </TestWrapper.WithForm>,
    );

    expect(screen.getByTestId('preview')).toBeInTheDocument();
  });

  test('preview mode', () => {
    render(
      <TestWrapper.WithForm defaultValues={{ text: 'preview' }}>
        <RichTextEditor isEdit name="text" />
      </TestWrapper.WithForm>,
    );

    expect(screen.getByText('preview')).toBeInTheDocument();
  });

  test('edit mode', () => {
    render(
      <TestWrapper.WithForm defaultValues={{ text: 'edit' }}>
        <RichTextEditor isEdit name="text" />
      </TestWrapper.WithForm>,
    );

    expect(screen.getByText('edit')).toBeInTheDocument();
  });
});
