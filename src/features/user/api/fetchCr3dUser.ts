import { Cr3dUser } from '../types'

export async function fetchCr3dUser(query: Record<string, any>) {
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/getUserType?' +
      new URLSearchParams(query),
    {
      method: 'GET',
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }

  return res.json() as Promise<Cr3dUser>
}
