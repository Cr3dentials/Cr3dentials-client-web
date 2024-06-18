type payload = {
  invoiceId: number
}
export async function declineInvoice(params: payload) {
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/invoice/decline',
    {
      body: JSON.stringify(params),
      method: 'DELETE',
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }
  return res.json()
}
