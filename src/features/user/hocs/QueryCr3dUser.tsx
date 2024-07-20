import { usePrivy } from '@privy-io/react-auth'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchCr3dUser } from '../api'
import LazyLoad from '@/components/UI/LazyLoad'

//not on public routes / and business-info
//should be under the router and notified when route changes
/**A hoc to query a cr3d user,making it globally available to the app*/
const QueryCr3dUser = ({ children }: { children: React.ReactNode }) => {
  const publicPaths = ['', '/business-info', '/customer-info']
  const pathname = window.location.pathname
  const { authenticated, user } = usePrivy()
  const cr3dUserQuery = useQuery({
    queryKey: ['cr3dUser'],
    queryFn: () =>
      fetchCr3dUser({
        username: user?.wallet?.address,
      }),
    enabled: authenticated && !publicPaths.includes(pathname),
    retry: false,
  })

  if (authenticated && cr3dUserQuery.error?.message === '404') {
    //redirect to either info / customer info
    //console.log('here')
  }

  if (authenticated) {
    if (cr3dUserQuery.isLoading) {
      return <LazyLoad />
    } else if (cr3dUserQuery.isPending) {
      return children
    } else if (cr3dUserQuery.isSuccess) {
      return children
    }
    return (
      <div className="p-5 pb-16 min-h-screen flex justify-center items-center">
        <span>Something bad happen. {cr3dUserQuery.error.message}</span>
      </div>
    )
  }
  return children
}

export default QueryCr3dUser
