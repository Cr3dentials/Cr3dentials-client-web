import * as v from 'valibot'
import * as ethers from 'ethers'
export const createInvoiceSchema = v.object({
  invoiceId: v.number([v.minValue(10000)]),
  dueDate: v.number(),
  amount: v.number(),
  payer: v.string([
    v.custom<string>(ethers.isAddress, 'Invalid Wallet Address'),
  ]),
  currency: v.string(),
  processor: v.string(),
  vendorId: v.string([
    v.custom<string>(ethers.isAddress, 'Invalid Wallet Address'),
  ]),
  phonePayer: v.string([v.minLength(1)]),
  namePayer: v.string([v.minLength(1)]),
  vendor_till_number: v.string([
    v.minLength(4, 'Invalid Till Number'),
    v.maxLength(5, 'Invalid Till Number'),
  ]),
})
