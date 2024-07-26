import { useMutation } from '@tanstack/react-query'
// import React from 'react'
import createInvoice, { createInvoicePayload } from '../api/createInvoice'
import { createInvoiceSchema } from '../schemas'
import * as v from 'valibot'
import createInstallmentPlan from '../api/createInstallmentPlan'

export const useCreateInvoice = () => {
  return useMutation({
    mutationKey: ['create_invoice'],
    mutationFn: async function (payload: createInvoicePayload) {
      const parsedPayload = v.parse(createInvoiceSchema, payload)
      if (parsedPayload.type === 'installments' && payload.frequency) {
        const invoice = await createInvoice(parsedPayload)
        createInstallmentPlan({
          invoice_id: payload.invoiceId,
          frequency: parseInt(payload.frequency),
          amount: payload.amount,
        })
        return invoice
        //createInstallmentPlan({invoice_id:invoice.invoice_id,frequency:invoice.})
      }
      return createInvoice(parsedPayload)
    },
  })
}
