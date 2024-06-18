import { Typography } from '@mui/material'
import React from 'react'

const index = ({
  text,
  Icon,
  subText,
  children,
}: {
  Icon: React.ReactNode
  text: string
  subText: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-4">
      {Icon}
      <Typography
        variant="h4"
        mt={5}
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '30px',
          textAlign: 'center',
        }}
      >
        {text}
      </Typography>
      <Typography
        variant="body2"
        mt={2}
        sx={{
          fontSize: '16px',
          lineHeight: '20px',
          color: '#474C59',
          textAlign: 'center',
        }}
      >
        {subText}
      </Typography>
      {children}

      {/* <Button label={`That's Great`} className="mt-6" onClick={handleSuccess} />
      <OutlinedButton
        label="Create more Invoice"
        className="mt-4"
        onClick={handleCreateMore} 
         />
        */}
    </div>
  )
}

export default index
