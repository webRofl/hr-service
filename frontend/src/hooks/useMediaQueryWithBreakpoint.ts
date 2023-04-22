import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

type UseMediaQueryWithBreakpoint = (breakpoint: Breakpoint) => boolean;

const useMediaQueryWithBreakpoint: UseMediaQueryWithBreakpoint = (breakpoint) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));

  return matches;
};

export default useMediaQueryWithBreakpoint;
