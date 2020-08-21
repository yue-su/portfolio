import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e9ecef',
      paper: '#f8f9fa'
    },
    text: {
      primary: "#212529",
    }
  },
  typography: {
    body2: {
      fontSize: "0.75rem"
    }
  }
});

export default theme;
