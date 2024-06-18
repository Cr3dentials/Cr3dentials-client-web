import { MutationCache, QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess() {
      //console.log('i was a success')
      queryClient.invalidateQueries({
        refetchType: 'active',
      })
    },
  }),
})
