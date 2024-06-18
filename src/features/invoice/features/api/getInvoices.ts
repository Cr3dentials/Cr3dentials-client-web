import { invoice } from '../../types'
import qs from 'qs'

export async function fetchCr3dInvoices(query: Record<string, any>) {
  //console.log(qs.stringify(query), query)
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/getUserInvoices?' +
      qs.stringify(query),
    {
      method: 'GET',
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }

  return res.json() as Promise<invoice[]>
}
