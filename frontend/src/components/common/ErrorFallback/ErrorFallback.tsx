import React, { FC, useMemo } from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const errorDetails = useMemo(() => {
    return {
      message: error.message,
      stack: error.stack,
    };
  }, [error]);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {Object.entries(errorDetails).map(([key, value]) => {
        return (
          <pre data-testid="error-fallback-testid">
            {key}: {value}
          </pre>
        );
      })}
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
