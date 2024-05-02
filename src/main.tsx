import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Providers } from './store/provider'
import './index.css'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Providers>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </Providers>,
  // </React.StrictMode>,
)
