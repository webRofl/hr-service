export const getFormatDate = (): string => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Intl.DateTimeFormat('us-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: timezone,
    hour12: true,
  }).format();
};

export const getRelativeTimeString = (date: Date, lang = navigator.language) => {
  const timeMs = typeof date === 'number' ? date : date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365];
  const units = ['seconds', 'minute', 'hour', 'day', 'week', 'month', 'year'] as const;
  const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
};
