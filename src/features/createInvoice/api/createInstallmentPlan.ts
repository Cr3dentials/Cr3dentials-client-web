import axios from 'axios'

type createInstallmentPlanPayload = {
  invoice_id: number
  frequency: number
  amount: number
}

function calculateAmountPerFrequency(
  invoiceAmount: number,
  maxInstallments: number,
): number {
  // Ensure we don't divide by zero
  if (maxInstallments <= 0) {
    throw new Error('Maximum number of installments must be greater than zero')
  }

  // Calculate the minimum amount per frequency
  const amountPerFrequency = Math.ceil(invoiceAmount / maxInstallments)

  return amountPerFrequency
}

export default function createInstallmentPlan(
  payload: createInstallmentPlanPayload,
) {
  const amountPerFrequency = calculateAmountPerFrequency(payload.amount, 4)
  payload.amount = amountPerFrequency
  return axios.post(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/installments/new',
    payload,
  )
}
