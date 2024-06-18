import { createCr3dUser, createCr3dUserPayload } from '@/features/user/api'
import { usePrivy } from '@privy-io/react-auth'
import { useMutation } from '@tanstack/react-query'

// const user = {
//   id: 'did:privy:clvy8p3tc07ft12xxwj10ggb0',
//   createdAt: '2024-05-08T19:55:56.000Z',
//   linkedAccounts: [
//     {
//       address: 'baxaxis823@godsigma.com',
//       type: 'email',
//       verifiedAt: '2024-05-08T19:55:56.000Z',
//       firstVerifiedAt: '2024-05-08T19:55:56.000Z',
//       latestVerifiedAt: '2024-05-08T20:41:49.000Z',
//     },
//     {
//       address: '0x5F1fF5860901ec25cC1cdB9Aaa8E6d5B31D3F462',
//       type: 'wallet',
//       verifiedAt: '2024-05-08T19:55:59.000Z',
//       firstVerifiedAt: '2024-05-08T19:55:59.000Z',
//       latestVerifiedAt: '2024-05-08T19:55:59.000Z',
//       chainType: 'ethereum',
//       chainId: 'eip155:1',
//       walletClient: 'privy',
//       walletClientType: 'privy',
//       connectorType: 'embedded',
//       recoveryMethod: 'privy',
//     },
//   ],
//   email: {
//     address: 'baxaxis823@godsigma.com',
//   },
//   wallet: {
//     address: '0x5F1fF5860901ec25cC1cdB9Aaa8E6d5B31D3F462',
//     chainType: 'ethereum',
//     chainId: 'eip155:1',
//     walletClient: 'privy',
//     walletClientType: 'privy',
//     connectorType: 'embedded',
//     recoveryMethod: 'privy',
//   },
//   mfaMethods: [],
//   hasAcceptedTerms: false,
// }
export function useCreateCr3dUser() {
  const { user } = usePrivy()
  const mutation = useMutation({
    mutationKey: ['createCr3dUser'],
    mutationFn: async function ({
      role = 'vendor',
      phone_number,
      ...restOfPayload
    }: Omit<createCr3dUserPayload, 'email' | 'username'>) {
      return createCr3dUser({
        //created_at: Math.floor(new Date().getTime() / 1000),
        email: user?.email?.address,
        username: user?.wallet?.address!,
        phone_number: phone_number || user?.phone?.number,
        role,
        ...restOfPayload,
      })
    },
  })
  return mutation
}
