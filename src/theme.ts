import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Manrope', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'text',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          // lineHeight: 1,
        },
        contained: {
          boxShadow: 'none',
          '&:hover, &:focus': {
            boxShadow: 'none',
            backgroundColor: '#5058E7',
          },
        },
      },
    },
  },
})

export default theme
