import * as v from 'valibot'
import { signInvoiceSchema } from '../../schemas'
export async function signInvoice(payload: {
  invoice_id: number
  payer: string
}) {
  v.parse(signInvoiceSchema, payload)
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/invoice/sign',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
  if (!res.ok) {
    throw new Error('failed to sign invoice:' + res.statusText)
  }
  return res.json()
}
