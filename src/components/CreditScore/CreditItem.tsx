import React from 'react'
import Typography from '@mui/material/Typography'

export type CreditItemProps = {
  id: number
  title: string
  content: string
  percent: number
  status: string
}

const CreditItem: React.FC<CreditItemProps> = ({
  id,
  title,
  content,
  percent,
  status,
}: CreditItemProps) => {
  return (
    <div className="p-[10px] border border-gray-100">
      <div className="flex items-center justify-between">
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
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {percent}%
        </Typography>
      </div>
      <div className="flex items-center justify-between mt-2">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#767C8C',
          }}
        >
          {content}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            background: '#20C3750A',
            color: '#20C375',
            borderRadius: '100px',
            padding: '2px 8px',
          }}
        >
          {status}
        </Typography>
      </div>
    </div>
  )
}

export default CreditItem
