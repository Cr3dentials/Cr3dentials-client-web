import React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SVGIcon from '@mui/material/SvgIcon'

export type InvoiceItemProps = {
  id: number
  title: string
  amount: number
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  title,
  amount,
}: InvoiceItemProps) => {
  return (
    <div className="flex items-center justify-between p-5 mt-2 border border-gray-100 rounded-md">
      <div>
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography
          mt={1}
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 700,
          }}
        >
          ${amount}
        </Typography>
      </div>
      <IconButton>
        <SVGIcon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="1"
              stroke="#0E0E0E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="19"
              r="1"
              stroke="#0E0E0E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="5"
              r="1"
              stroke="#0E0E0E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SVGIcon>
      </IconButton>
    </div>
  )
}

export default InvoiceItem
