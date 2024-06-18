import React from 'react'
import Typography from '@mui/material/Typography'
import Status, { status } from '../UI/Status'
import Trend from '../Icons/Trend'
import { Link } from 'react-router-dom'

export type InvoiceItemProps = {
  id: number
  name: string
  date: string
  amount: number
  status: status
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  id,
  name,
  date,
  amount,
  status,
}: InvoiceItemProps) => {
  return (
    <Link to={'/invoice/' + id}>
      <div className="p-4 mt-2 border border-gray-100 rounded-[8px]">
        <div className="flex justify-between">
          {/* <Trend /> */}
          <div className="pl-2 w-full">
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
                Ksh {amount}
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
              <Status status={status} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default InvoiceItem
