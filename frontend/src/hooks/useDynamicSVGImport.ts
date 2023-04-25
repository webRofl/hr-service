import React, { SVGProps, useEffect, useRef, useState, FC } from 'react';

interface UseDynamicSVGImportOptions {
  onCompleted?: (name: string, SvgIcon: JSX.Element | undefined) => void;
  onError?: (err: Error) => void;
}

const useDynamicSVGImport = (name: string, options: UseDynamicSVGImportOptions = {}) => {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { onCompleted, onError } = options;
  useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../assets/icons/${name}.svg`)).ReactComponent;
        // @ts-expect-error something mistake
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        if (err instanceof Error) {
          onError?.(err);
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return {
    isLoading,
    isError,
    SvgIcon: ImportedIconRef.current,
  };
};

export default useDynamicSVGImport;
