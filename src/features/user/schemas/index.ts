import * as v from 'valibot'
import * as ethers from 'ethers'

export const ROLES = {
  USER: 'user',
  VENDOR: 'vendor',
}
const sharedSchema = v.object({
  email: v.optional(v.string([v.email()])),
  username: v.string([
    v.custom<string>(ethers.isAddress, 'Invalid Wallet Address'),
  ]),
  role: v.enum_(ROLES),
  created_at: v.number([v.minValue(1, 'Due date required')]),
})

export const createCr3dUserSchema = v.merge([
  sharedSchema,
  v.object({
    phone_number: v.string([v.minLength(1, 'Phone number is required')]),
  }),
])
export const createCr3dUserVendorSchema = v.merge([
  sharedSchema,
  v.object({
    vendorTillNumber: v.number([v.minValue(1000, 'Invalid Till Number')]),
  }),
])
