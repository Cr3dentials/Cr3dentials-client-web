import Routes from '@/routes'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from './theme'
import { PrivyProvider } from '@privy-io/react-auth'
import CredLogo from '@/assets/icons/credentials.svg'
import PrivyAuth from './hocs/PrivyAuth.tsx'
import { sepolia } from 'viem/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { queryClient } from './lib/reactQuery/index.ts'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import QueryCr3dUser from './features/user/hocs/QueryCr3dUser.tsx'
import { Container } from '@mui/material'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PrivyProvider
          appId="clvwaw3840l0lb1p5bqju84bk"
          config={{
            /* Replace this with your desired login methods */
            loginMethods: ['sms', 'email'],
            /* Replace this with your desired appearance configuration */
            appearance: {
              theme: 'light',
              accentColor: '#676FFF',
              logo: CredLogo,
            },
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
              noPromptOnSignature: true,
            },
            //Import your desired chain from `viem/chains` and pass it to `defaultChain`
            defaultChain: sepolia,
          }}
        >
          <QueryClientProvider client={new QueryClient()}>
            <Container maxWidth={'sm'}>
              <QueryCr3dUser>
                <PrivyAuth>
                  <Routes />
                </PrivyAuth>
              </QueryCr3dUser>
            </Container>

            <ReactQueryDevtools />
          </QueryClientProvider>
        </PrivyProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
