import { useMutation } from '@tanstack/react-query'
import React from 'react'
import createInvoice, { createInvoicePayload } from '../api/createInvoice'
import { createInvoiceSchema } from '../schemas'
import * as v from 'valibot'

export const useCreateInvoice = () => {
  return useMutation({
    mutationKey: ['create_invoice'],
    mutationFn: function (payload: createInvoicePayload) {
      const parsedPayload = v.parse(createInvoiceSchema, payload)
      return createInvoice(parsedPayload)
    },
  })
}
