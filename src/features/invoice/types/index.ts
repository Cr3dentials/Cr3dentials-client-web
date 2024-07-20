import { type status } from '@/components/UI/Status'
type invoiceInstallment = {
  amount: string | number
  status: status
  due_date: number
}
export type invoice = {
  invoice_id: number
  due_date?: number
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
  description: string
  type: 'one-time' | 'installments'
  installmentPlans?: invoiceInstallment[]
}
