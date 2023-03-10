export const getFormatDate = (): string => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Intl.DateTimeFormat('us-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: timezone,
    hour12: true,
  }).format();
};

export const capitilize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};
