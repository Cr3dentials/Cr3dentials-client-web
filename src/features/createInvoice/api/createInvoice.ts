import { invoice } from '@/features/invoice/types'
// import axios from 'axios'
// type phone_number = string
// type email = string

// type payer = phone_number | email
// type privy_id = string

/**Wallet address of the privy user */
type walletAddress = string

export type createInvoicePayload = {
  invoiceId: number
  dueDate: number
  amount: number
  //it's now the wallet address of the business temporarily
  payer: walletAddress
  currency: string
  processor: string
  vendorId: walletAddress
  phonePayer: string
  namePayer: string
  vendor_till_number: string
}

export default async function createInvoice(payload: createInvoicePayload) {
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/invoice/new',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }

  return res.json() as Promise<invoice>

  // {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': true,
  //     'Cache-Control': 'no-cache',
  //   },
  // },
}
