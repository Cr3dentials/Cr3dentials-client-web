import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import Button from '@/components/UI/Button'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'

const ConfirmOTP: React.FC = () => {
  const [otp, setOtp] = useState('')
  return (
    <AuthLayout>
      <div className="mt-6">
        <div>
          <Typography
            variant="h2"
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '30px',
            }}
          >
            OTP Code
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              marginTop: '8px',
            }}
          >
            Enter the Code that we have sent to ahmerilyassial@gmail.com
          </Typography>
        </div>
        <div className="mt-10">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            placeholder="000000"
            renderSeparator={<span className="w-[1em]">{` `}</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: 49,
              height: 49,
              borderRadius: 8,
              backgroundColor: '#F0F1F5',
              color: '#000000',
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 30,
            }}
          />
          <MuiButton
            variant="text"
            sx={{
              marginTop: '10px',
              color: '#4B56E3',
              fontSize: '16px',
              lineHeight: '12px',
              fontWeight: 600,
              float: 'right',
            }}
          >
            Paste Code
          </MuiButton>
        </div>
        <div className="mt-20">
          <Button label="Verify Code"></Button>
          <MuiButton
            variant="text"
            fullWidth
            sx={{
              height: '56px',
              marginTop: '10px',
              color: '#4B56E3',
              fontSize: '16px',
              lineHeight: '12px',
              fontWeight: 600,
              borderRadius: '100px',
            }}
          >
            Paste Code
          </MuiButton>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ConfirmOTP
