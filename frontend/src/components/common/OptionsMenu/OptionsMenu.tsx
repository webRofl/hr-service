import { useClickOutside, useEventListener } from '@/hooks';
import React, { useState } from 'react';
import * as SC from './OptionsMenu.style';

interface OptionMenuProps {
  stack: [string, string][];
}

const OptionMenu = React.forwardRef<HTMLDivElement, OptionMenuProps>(({ stack }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickOutsideHandler = () => {
    setIsOpen(false);
  };

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(ref, clickOutsideHandler);
  useEventListener('click', clickHandler, ref?.current);

  return (
    <SC.Container
      divider={<SC.Divider variant="fullWidth" />}
      isDisplay={isOpen}
      leftStyle={ref?.current?.parentNode?.clientWidth}>
      {stack.map(([key, value]) => (
        <SC.Link to={value}>{key}</SC.Link>
      ))}
    </SC.Container>
  );
});

export default OptionMenu;
