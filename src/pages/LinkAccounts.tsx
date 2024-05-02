import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'
import AccountItem from '@/components/LinkAccounts/AccountItem'
import MTNImg from '@/assets/images/Accounts/MTN.png'
import PaystackImg from '@/assets/images/Accounts/Paystack.png'

export type AccountType = {
  id: number
  image: any
  lastNum: string
  name: string
}

const accounts = [
  {
    id: 1,
    image: MTNImg,
    lastNum: '3857',
    name: 'Christopher Barton',
  },
  {
    id: 2,
    image: PaystackImg,
    lastNum: '7895',
    name: 'Christopher Barton',
  },
]

const LinkAccounts: React.FC = () => {
  return (
    <AuthLayout>
      <div className="mt-6">
        <Typography
          variant="h2"
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '30px',
          }}
        >
          Link Accounts
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
            marginTop: '8px',
          }}
        >
          Link your accounts for a smoother and more convenient payment
          experience!
        </Typography>
      </div>
      <div className="mt-10">
        {accounts.map((account: AccountType, id: number) => {
          return (
            <AccountItem
              key={id}
              id={account.id}
              image={account.image}
              lastNum={account.lastNum}
              name={account.name}
            />
          )
        })}
      </div>
      <div>
        <Button
          variant="text"
          fullWidth
          startIcon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#F5F6FA" />
              <path
                d="M25 17C25 16.4477 24.5523 16 24 16C23.4477 16 23 16.4477 23 17V23H17C16.4477 23 16 23.4477 16 24C16 24.5523 16.4477 25 17 25H23V31C23 31.5523 23.4477 32 24 32C24.5523 32 25 31.5523 25 31V25H31C31.5523 25 32 24.5523 32 24C32 23.4477 31.5523 23 31 23H25V17Z"
                fill="#4B56E3"
              />
            </svg>
          }
          sx={{
            color: 'black',
            paddingTop: '10px',
            paddingBottom: '10px',
            justifyContent: 'left',
            paddingLeft: '4px',
            borderRadius: '0px',
            borderBottom: '1px solid #F5F5F8',
          }}
        >
          <div className="pl-3">Add New Account</div>
        </Button>
      </div>
    </AuthLayout>
  )
}

export default LinkAccounts
