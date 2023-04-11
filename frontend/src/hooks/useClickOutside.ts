import { MutableRefObject, RefObject, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const useClickOutside = (
  ref: RefObject<HTMLElement> | MutableRefObject<unknown>,
  cb: () => void,
) => {
  const handler = (e: Event) => {
    if (ref?.current instanceof Node && !ref?.current.contains(e.target as Node)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
};

export default useClickOutside;
