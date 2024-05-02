import React from 'react'
import Typography from '@mui/material/Typography'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'
import SandClockImg from '@/assets/images/SandClock.png'
import Button from '@/components/UI/Button'

const ConnectTransactions: React.FC = () => {
  return (
    <AuthLayout>
      <div className={`mt-10 text-center`}>
        <img className="block m-auto" src={SandClockImg} />
        <Typography
          variant="h3"
          mt={3}
          sx={{
            fontSize: '22px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: '32px',
          }}
        >
          Initiate Credit Journey with Historical Transactions
        </Typography>
        <Typography
          variant="body2"
          mt={2}
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: '20px',
          }}
        >
          Connect your previous transactions so that we can start you off on a
          credit score so you can qualify for a loan as soon as TODAY!
        </Typography>
        <Button className="mt-10" label="Connect Transactions" />
      </div>
    </AuthLayout>
  )
}

export default ConnectTransactions
