/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
import { CSSObject, Stack, Theme, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

export const MenuContainer = styled(Stack)`
  height: 100vh;
  padding-top: 10%;
  position: relative;
`;

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  backgroundColor: 'transparent',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: 'transparent',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
  fill: theme.white.main,
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const ocIcon = {
  width: 25,
};

interface IDrawerProps {
  drawerwidth: number;
  isopen: boolean;
}

export const Drawer = styled(MuiDrawer)<IDrawerProps>((props) => ({
  width: props.drawerwidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  maxHeight: '100vh',
  ...(props.isopen && {
    ...openedMixin(props.theme, props.drawerwidth),
    '& .MuiDrawer-paper': openedMixin(props.theme, props.drawerwidth),
  }),
  ...(!props.isopen && {
    ...closedMixin(props.theme),
    '& .MuiDrawer-paper': closedMixin(props.theme),
  }),
}));
