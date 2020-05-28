import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#9F5222',
        textTransform: "none",
        '&:hover': {
          backgroundColor: '#D9A265',
        },
      },
    },
  },
  palette: {
    type: 'dark',
  },
});

export default customTheme