import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const themeLight = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#ffffff',
    },

    secondary: {
      main: grey[500],
    },
    grey: {
      100: '#ffffff',
      200: '#f5f5f5',
      300: '#333333',
      400: '#F8F8FA',
      600: '#ffffff',
      700: '#999999',
      800: '#333333',
      900: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#949CB1',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F8FA',
    },
  },
  typography: {
    h2: {
      fontSize: '2.4rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.6rem',
    },
    body2: {
      fontSize: '1.4rem',
    },
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
  },
});
export const themeDark = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#333333',
    },

    secondary: {
      main: grey[500],
    },
    grey: {
      100: '#ffffff',
      200: '#414144',
      300: '#414144',
      400: '#414144',
      600: '#5d5d60',
      700: '#949cb1',
      800: '#ffffff',
      900: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#949CB1',
    },
    background: {
      default: '#1f1f23',
      paper: '#1f1f23',
    },
  },
  typography: {
    h2: {
      fontSize: '2.4rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.6rem',
    },
    body2: {
      fontSize: '1.4rem',
    },
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
  },
});

export const userDarkMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const theme = userDarkMode ? themeDark : themeLight;
