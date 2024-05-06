import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import InvoiceItem from '@/components/Invoices/InvoiceItem'
import { status } from '@/components/UI/Status'
import { Link } from 'react-router-dom'

export const invoices = [
  {
    id: 1,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Paid',
  },
  {
    id: 2,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Paid Early',
  },
  {
    id: 3,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Paid Late',
  },
  {
    id: 5,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Overdue',
  },
  {
    id: 6,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Overdue',
  },
  {
    id: 7,
    name: 'Christopher Barton',
    amount: 650.0,
    date: '06 Nov 2023',
    status: 'Overdue',
  },
]
const index = () => {
  return (
    <div className="p-5 pb-16">
      <div className="flex justify-between items-center">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '20px',
          }}
        >
          Invoices
        </Typography>
        <Link to={'/create-invoice'}>
          <IconButton className="text-gray-1000">
            <AddIcon />
          </IconButton>
        </Link>
      </div>
      <div className="mt-4 max-h-96 overflow-auto">
        {invoices.map((invoice) => (
          <InvoiceItem
            key={invoice.id}
            id={invoice.id}
            name={invoice.name}
            date={invoice.date}
            amount={invoice.amount}
            status={invoice.status as status}
          />
        ))}
      </div>
    </div>
  )
}

export default index
