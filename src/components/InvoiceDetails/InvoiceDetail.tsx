import { Typography } from '@mui/material'
import React from 'react'

type InvoiceDetailProps = {
  title: string
  children?: React.ReactNode
  detail?: string
}
const InvoiceDetail = ({ title, children, detail }: InvoiceDetailProps) => {
  return (
    <div className="flex flex-col self-end">
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
        }}
      >
        {title}
      </Typography>
      {children ? (
        <div className="mt-2">{children}</div>
      ) : (
        <Typography
          variant="body2"
          className="mt-2"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#767C8C',
          }}
        >
          {detail}
        </Typography>
      )}
    </div>
  )
}

export default InvoiceDetail
