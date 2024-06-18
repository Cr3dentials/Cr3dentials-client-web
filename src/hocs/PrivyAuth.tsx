import LazyLoad from '@/components/UI/LazyLoad'
import { usePrivy } from '@privy-io/react-auth'

const PrivyAuth = ({ children }: { children: React.ReactNode }) => {
  const { ready } = usePrivy()
  if (ready) {
    return children
  }
  return <LazyLoad />
}

export default PrivyAuth
