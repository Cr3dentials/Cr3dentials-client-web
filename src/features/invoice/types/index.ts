import { type status } from '@/components/UI/Status'
export type invoice = {
  invoice_id: number
  due_date: number
  amount: number
  payer: string
  currency: string
  processor: string
  vendor_id: string
  phone_payer: string
  name_payer: string
  //flag to determine state pending | active
  signed: boolean
  status: status
}
