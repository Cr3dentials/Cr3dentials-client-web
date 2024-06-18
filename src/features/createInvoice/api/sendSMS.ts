export async function sendSMS(invoice_id: number) {
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/smsTrigger',
    {
      method: 'POST',
      body: JSON.stringify({
        invoice_id,
      }),
    },
  )
  if (!res.ok) {
    throw new Error('failed to send sms')
  }

  return res.json()
}
