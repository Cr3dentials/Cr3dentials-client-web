import { PrivyEvents, type User } from '@privy-io/react-auth'
import { useQueryClient } from '@tanstack/react-query'

/**@ts-expect-error */
type authLoginOnCompleteParams = Parameters<PrivyEvents['login']['onComplete']>
type user = User
export type loginMethod = authLoginOnCompleteParams[3]
export type loginAccount = authLoginOnCompleteParams[4]

export type privyAuthDetails = {
  user: user
  isNewUser: boolean
  wasAlreadyAuthenticated: boolean
  loginMethod: loginMethod
  loginAccount: loginAccount
}

export function useGetPrivyAuthDetails(): privyAuthDetails | undefined {
  const qc = useQueryClient()
  return qc.getQueryData(['privy_auth'])
}
