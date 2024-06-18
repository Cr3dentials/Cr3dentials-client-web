type walletAddress = string

export type Cr3dUser = {
  email?: string
  username: walletAddress // We've decided to use the wallet address for username
  phone_number?: string
  role: 'user' | 'vendor'
  created_at: string
  vendor_till_number?: number
}
