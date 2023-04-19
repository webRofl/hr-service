import React, { FC } from 'react';

interface IErrorFallbackProps {
  error: Error | string;
  resetErrorBoundary?: () => void;
}

const ErrorFallback: FC<IErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error instanceof Error ? error.message : error}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
