import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'

export type InvoiceItemProps = {
  id: number
  name: string
  date: string
  amount: number
  status: 'Paid' | 'Paid Early' | 'Active' | 'Paid Late' | 'Overdue'
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  name,
  date,
  amount,
  status,
}: InvoiceItemProps) => {
  const [badgeColor, setBadgeColor] = useState<string>('#20C375')
  const [badgeBgColor, setBadgeBgColor] = useState<string>('#20C3750A')

  useEffect(() => {
    if (status === 'Paid' || status === 'Paid Early') {
      setBadgeColor('#20C375')
      setBadgeBgColor('#20C3750A')
    } else if (status === 'Active') {
      setBadgeColor('#1677FF')
      setBadgeBgColor('#1677FF0A')
    } else if (status === 'Paid Late') {
      setBadgeColor('#FA8C16')
      setBadgeBgColor('#FA8C160A')
    } else if (status === 'Overdue') {
      setBadgeColor('#F5222D')
      setBadgeBgColor('#F5222D0A')
    }
  })
  return (
    <div className="p-4 mt-2 border border-gray-100 rounded-[8px]">
      <div className="flex items-center justify-between">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          ${amount}
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
          {date}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            background: badgeBgColor,
            color: badgeColor,
            borderRadius: '100px',
            padding: '2px 8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {status === 'Paid Early' && (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.57658 3.20419C5.20991 2.06806 5.52657 1.5 6 1.5C6.47343 1.5 6.79009 2.06806 7.42342 3.20419L7.58727 3.49812C7.76724 3.82097 7.85722 3.98239 7.99753 4.0889C8.13783 4.19541 8.31257 4.23495 8.66206 4.31402L8.98023 4.38601C10.2101 4.66428 10.825 4.80341 10.9713 5.27387C11.1176 5.74432 10.6984 6.23454 9.85995 7.21496L9.64304 7.46861C9.40479 7.74722 9.28566 7.88652 9.23207 8.05886C9.17848 8.23119 9.19649 8.41706 9.23251 8.78878L9.2653 9.1272C9.39206 10.4353 9.45544 11.0894 9.07243 11.3801C8.68941 11.6709 8.11366 11.4058 6.96216 10.8756L6.66426 10.7384C6.33704 10.5878 6.17343 10.5124 6 10.5124C5.82657 10.5124 5.66296 10.5878 5.33574 10.7384L5.03784 10.8756C3.88634 11.4058 3.31059 11.6709 2.92757 11.3801C2.54456 11.0894 2.60794 10.4353 2.7347 9.1272L2.76749 8.78878C2.80351 8.41706 2.82152 8.23119 2.76793 8.05886C2.71434 7.88652 2.59521 7.74722 2.35696 7.46861L2.14005 7.21496C1.30162 6.23454 0.882412 5.74432 1.02871 5.27387C1.17501 4.80341 1.78993 4.66428 3.01977 4.38601L3.33794 4.31402C3.68743 4.23495 3.86217 4.19541 4.00247 4.0889C4.14278 3.98239 4.23276 3.82097 4.41273 3.49812L4.57658 3.20419Z"
                fill="#20C375"
              />
            </svg>
          )}
          {status}
        </Typography>
      </div>
    </div>
  )
}

export default InvoiceItem
