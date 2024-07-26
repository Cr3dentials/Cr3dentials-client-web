import { payInvoiceSchema, payInvoiceInstallmentSchema } from '../../schemas'
import * as v from 'valibot'
export type payInvoicePayload = {
  phone_payer: string
  amount: number
  invoice_id: number
}

//handler({ number: '254724040839', amount: 1, invoiceId: '123456' });
export async function payInvoice(payload: payInvoicePayload) {
  const parsedPayload = v.parse(payInvoiceSchema, payload)
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/payments/mpesa',
    {
      body: JSON.stringify(parsedPayload),
      method: 'POST',
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }
  return res.json()
}

export type payInvoiceInstallmentPayload = {
  phone_payer: string
  amount: number
  invoice_id: number
  installment_id: number
}
//handler({ number: '254724040839', amount: 1, invoiceId: '123456' });
export async function payInstallment(payload: payInvoiceInstallmentPayload) {
  const parsedPayload = v.parse(payInvoiceInstallmentSchema, payload)
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/installments/pay',
    {
      body: JSON.stringify(parsedPayload),
      method: 'POST',
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }
  return res.json()
}
