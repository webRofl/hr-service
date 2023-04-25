import React, { useState } from 'react';
import { useClickOutside, useEventListener } from '@/hooks';
import * as SC from './OptionsMenu.style';

interface OptionMenuProps {
  stack: ([string, string] | null)[];
}

const OptionMenu = React.forwardRef<HTMLDivElement, OptionMenuProps>(({ stack }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickOutsideHandler = () => {
    setIsOpen(false);
  };

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  // @ts-expect-error something mistake
  useClickOutside(ref, clickOutsideHandler);
  // @ts-expect-error something mistake
  useEventListener('click', clickHandler, ref?.current);

  return (
    <SC.Container
      divider={<SC.Divider variant="fullWidth" />}
      isdisplay={isOpen}
      // @ts-expect-error something mistake
      leftstyle={ref?.current?.parentNode?.clientWidth}>
      {stack.map((item) => {
        if (!item) return null;

        const [key, value] = item;
        return (
          <SC.Link key={key} to={value}>
            {key}
          </SC.Link>
        );
      })}
    </SC.Container>
  );
});

export default OptionMenu;
