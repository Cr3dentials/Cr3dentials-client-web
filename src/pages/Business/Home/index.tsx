import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '@/components/Layout/Topbar'
import FilterButtons from '@/components/Business/Home/FilterButtons'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InvoiceItem from '@/components/Invoices/InvoiceItem'
import type { InvoiceItemProps as InvoiceItemType } from '@/components/Invoices/InvoiceItem'
import InvoiceImg from '@/assets/images/Invoice.png'
import Footer from '@/components/Layout/Footer'
import { useAppDispatch } from '@/store/hooks'
import { setModalName } from '@/store/slices/modalSlice'
import { NewInvoiceModalName } from '@/components/UI/Modal/NewInvoiceModal'

export const invoices: Array<InvoiceItemType> = [
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
]

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="p-5 pb-16">
        <Topbar />
        <div className="mt-6">
          <FilterButtons />
        </div>
        <div className="mt-4 p-4 border border-gray-100 rounded-[8px] flex items-center justify-center">
          <div className="flex flex-col max-w-[213px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              Create New Invoice
            </Typography>
            <Typography
              sx={{
                marginTop: '8px',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              fullWidth={false}
              onClick={() => dispatch(setModalName(NewInvoiceModalName))}
              sx={{
                marginTop: '16px',
                color: 'white',
                background: '#4B56E3',
                padding: '6px 12px',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '20px',
                borderRadius: '100px',
                width: 'fit-content',
                '&.Mui-disabled': {
                  backgroundColor: '#DCDDFA',
                  color: 'white',
                },
              }}
            >
              Start Now
            </Button>
          </div>
          <div className="flex items-center justify-center h-[77px] w-[74px]">
            <img
              className="w-full h-full"
              src={InvoiceImg}
              alt="invoice image"
            />
          </div>
        </div>
        <div className="mt-4">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '20px',
              display: 'inline-block',
            }}
          >
            Completed Invoices
          </Typography>
          <Link
            to={`/business/home`}
            className="text-primary-0 text-[16px] leading-[20px] float-right mt-[3px]"
          >
            See All
          </Link>
          {invoices.map((invoice: InvoiceItemType) => (
            <InvoiceItem
              key={invoice.id}
              id={invoice.id}
              name={invoice.name}
              date={invoice.date}
              amount={invoice.amount}
              status={invoice.status}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
