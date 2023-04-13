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
  // auth
  LOGIN = '/login',
  REGISTER = '/register',
  // project
  PROJECTS = '/projects',
  PROJECT_ID = '/projects/:projectId',
  PROJECT = '/projects/',
  PROJECT_CREATE = '/projects/create',
  PROFILE_PROJECTS_WITH_ID = '/profile/:profileId/projects',
  // profile
  CANDIDATES = '/candidates',
  PROFILE_CREATE = '/profile/create',
  EMPLOYER_PROFILE_WITH_ID = '/profile/employer/:profileId',
  EMPLOYER_PROFILE = '/profile/employer',
  EMPLOYEE_PROFILE_WITH_ID = '/profile/employee/:profileId',
  EMPLOYEE_PROFILE = '/profile/employee',
  // response
  RESPONSES = '/responses',
}
