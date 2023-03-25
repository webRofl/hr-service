type MouseEventNames =
  | 'click'
  | 'dblclick'
  | 'mousedown'
  | 'mouseup'
  | 'contextmenu'
  | 'mouseout'
  | 'mousewheel'
  | 'mouseover';
type TouchEventNames = 'touchstart' | 'touchend' | 'touchmove' | 'touchcancel';
type KeyboardEventNames = 'keydown' | 'keyup' | 'keypress';
type WindowEventNames = 'resize' | 'scroll' | 'load' | 'unload' | 'hashchange';

export type EventNames = MouseEventNames | TouchEventNames | KeyboardEventNames | WindowEventNames;
