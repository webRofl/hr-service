import { useEffect, useRef } from 'react';
import { EventNames } from '@/core';

const useEventListener = (eventName: EventNames, cb: EventListener, element: Node | null) => {
  const handler = useRef(cb);

  useEffect(() => {
    handler.current = cb;
  }, [cb]);

  useEffect(() => {
    if (element === null) {
      return;
    }
    if (!element.addEventListener) {
      throw new Error('Element has not addEventListener method!');
    }

    const listener = (e: Event) => handler.current(e);

    element.addEventListener(eventName, listener);

    // eslint-disable-next-line consistent-return
    return () => {
      element.removeEventListener(eventName, listener);
    };
  }, [eventName, element]);
};

export default useEventListener;
