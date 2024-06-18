import * as v from 'valibot'
import * as ethers from 'ethers'
export const signInvoiceSchema = v.object({
  invoice_id: v.number([v.minValue(10000, 'invalid invoice id')]),
  payer: v.string([
    v.custom<string>(ethers.isAddress, 'Invalid Wallet Address'),
  ]),
})
export const payInvoiceSchema = v.object({
  invoice_id: v.number([v.minValue(10000)]),
  amount: v.number(),
  phone_payer: v.string([v.minLength(1)]),
})
