import axios from 'axios'

type createInstallmentPlanPayload = {
  _invoiceId: string
  _totalInstallments: number
  _firstPaymentDueDate: number
  _installmentType: number
}

export default function createInstallmentPlan(
  payload: createInstallmentPlanPayload,
) {
  return axios.post(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/installments/new',
    payload,
  )
}
