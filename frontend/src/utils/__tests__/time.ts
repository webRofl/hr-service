import { getFormatDate, getRelativeTimeString } from '../time';

describe('time utils', () => {
  test('get format date', () => {
    const myDate = new Intl.DateTimeFormat('us-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour12: true,
    }).format();

    expect(getFormatDate()).toBe(myDate);
  });

  test('get relative time string', () => {
    // calculate time in ms relative to Date.now()
    // from this vars
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;

    expect(getRelativeTimeString(new Date(Date.now()))).toBe('now');

    expect(getRelativeTimeString(new Date(Date.now() - 24 * second))).toBe('24 seconds ago');

    expect(getRelativeTimeString(new Date(Date.now() - 3 * minute))).toBe('3 minutes ago');

    expect(getRelativeTimeString(new Date(Date.now() - 5 * hour))).toBe('5 hours ago');

    expect(getRelativeTimeString(new Date(Date.now() - 4 * day))).toBe('4 days ago');

    expect(getRelativeTimeString(new Date(Date.now() - 2 * week))).toBe('2 weeks ago');
  });
});
