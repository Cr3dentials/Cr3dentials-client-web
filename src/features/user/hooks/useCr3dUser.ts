import { Cr3dUser } from '../types'
import { useQueryClient } from '@tanstack/react-query'

export function useCr3dUser(): Cr3dUser {
  const client = useQueryClient()
  return client.getQueryData<Cr3dUser>(['cr3dUser'])!
}
