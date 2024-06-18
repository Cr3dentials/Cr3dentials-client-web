import { createCr3dUserSchema, createCr3dUserVendorSchema } from '../schemas'
import * as v from 'valibot'
type walletAddress = string
export type createCr3dUserPayload = {
  email?: string
  username: walletAddress // We've decided to use the wallet address for username
  phone_number?: string
  role: 'user' | 'vendor'
  created_at?: number
  vendorTillNumber?: number
}

export async function createCr3dUser(payload: createCr3dUserPayload) {
  // console.log({ payload })
  const parsedPayload = v.parse(
    payload.role === 'vendor'
      ? createCr3dUserVendorSchema
      : createCr3dUserSchema,
    payload,
  )

  // let parsedPayload = payload
  // if (payload.role === 'vendor') {
  //   v.parse(createCr3dUserVendorSchema, payload)
  // } else {
  //   v.parse(createCr3dUserSchema, payload)
  // }

  //console.log('after parse')
  const res = await fetch(
    'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/user',
    {
      method: 'POST',
      body: JSON.stringify(parsedPayload),
    },
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || err.message)
  }
  return res.json()
}

// export function createCr3dUser(payload: createCr3dUserPayload) {
//   return fetch(
//     'https://q6cvah3nic.execute-api.us-east-1.amazonaws.com/Staging/user',
//     {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     },
//   ).then((res) => {
//     if (!res.ok) {
//       console.log(res.status)
//       throw new Error('failed to create cr3duser')
//     }
//     return res.json() as Promise<Cr3dUser>
//   })
// }

// export function createCr3dUser(payload: createCr3dUserPayload) {
//   return Promise.resolve({})
// }
