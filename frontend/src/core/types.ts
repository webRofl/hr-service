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

export type ProfileType = 'employee' | 'employer';

export type InsertProperties<T, U extends keyof T> = T[U];

export const enum ROUTES {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  PROJECTS = '/projects',
  PROJECT_ID = '/projects/:projectId',
  PROJECT = '/projects/',
  PROFILE_CREATE = '/profile/create',
  CANDIDATES = '/candidates',
  EMPLOYER_PROFILE_WITH_ID = '/profile/employer/:profileId',
  EMPLOYER_PROFILE = '/profile/employer',
  EMPLOYEE_PROFILE_WITH_ID = '/profile/employee/:profileId',
  EMPLOYEE_PROFILE = '/profile/employee',
  PROJECT_CREATE = '/profile/projects/create',
  PROFILE_PROJECTS_WITH_ID = '/profile/:profileId?/projects',
  RESPONSES = '/responses',
}
