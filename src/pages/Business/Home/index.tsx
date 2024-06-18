import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '@/components/Layout/Topbar'
import Typography from '@mui/material/Typography'
import InvoiceItem from '@/components/Invoices/InvoiceItem'
import type { InvoiceItemProps as InvoiceItemType } from '@/components/Invoices/InvoiceItem'
import InvoiceImg from '@/assets/images/Invoice.png'
import { useCr3dUser } from '@/features/user/hooks/useCr3dUser'
import { usePrivy } from '@privy-io/react-auth'
import { fetchCr3dInvoices } from '@/features/invoice/features/api'
import { useQuery } from '@tanstack/react-query'
import Action from '@/components/UI/Action'
import Moneyjar from '@/assets/images/Moneyjar.png'
import MUIButton from '@mui/material/Button'
//import Footer from '@/components/Layout/Footer'
//import { useAppDispatch } from '@/store/hooks'
//import { setModalName } from '@/store/slices/modalSlice'
//import { NewInvoiceModalName } from '@/components/UI/Modal/NewInvoiceModal'

// export const invoices: Array<InvoiceItemType> = [
//   {
//     id: 1,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Paid',
//   },
//   {
//     id: 2,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Paid Early',
//   },
//   {
//     id: 3,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Active',
//   },
//   {
//     id: 4,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Paid Late',
//   },
//   {
//     id: 5,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Overdue',
//   },
//   {
//     id: 6,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Overdue',
//   },
//   {
//     id: 7,
//     name: 'Christopher Barton',
//     amount: 650.0,
//     date: '06 Nov 2023',
//     status: 'Overdue',
//   },
// ]

const Home: React.FC = () => {
  //const dispatch = useAppDispatch()
  const cr3dUser = useCr3dUser()
  const isVendor = cr3dUser.role === 'vendor'
  const { user } = usePrivy()
  //const navigate = useNavigate()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['invoices'],
    queryFn: () =>
      fetchCr3dInvoices(
        isVendor
          ? {
              vendor_id: user?.wallet?.address,
            }
          : {
              phone_payer: cr3dUser.phone_number?.trim(),
            },
      ),
  })
  //console.log({ isVendor })

  return (
    <div className="p-5 pb-16">
      <Topbar />
      {/* <div className="mt-6">
        <FilterButtons />
      </div> */}
      {cr3dUser.role === 'vendor' && (
        <div className="mt-4 p-4 border border-gray-100 rounded-[8px] flex items-center justify-between">
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
              Welcome, lets get you started
            </Typography>
            <Link to={'/create-invoice'}>
              <MUIButton
                disableElevation
                variant="contained"
                fullWidth={false}
                //onClick={() => dispatch(setModalName(NewInvoiceModalName))}
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
              </MUIButton>
            </Link>
          </div>
          <div className="flex items-center justify-center h-[77px] w-[74px]">
            <img
              className="w-full h-full"
              src={InvoiceImg}
              alt="invoice image"
            />
          </div>
        </div>
      )}
      <div className="mt-4 max-h-96 overflow-auto">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            display: 'inline-block',
          }}
        >
          Invoices
        </Typography>
        <Link
          to={`/invoices`}
          className="text-primary-0 text-[16px] leading-[20px] float-right mt-[3px]"
        >
          See All
        </Link>
        {isLoading ? (
          <span className="block text-center">Fetching invoices</span>
        ) : isError ? (
          <span className="block text-center">
            Something bad happened.Try again.
          </span>
        ) : data?.length === 0 ? (
          <div className="h-3/4">
            <Action
              Icon={
                <img
                  //className="w-[105px] h-[105px]"
                  src={Moneyjar}
                  alt="no invoices"
                />
              }
              subText={
                isVendor
                  ? 'Start managing your finances by creating your first invoice.'
                  : 'Nothing here'
              }
              text="No Invoices Found"
            >
              {null}
            </Action>
          </div>
        ) : (
          data!.map((invoice) => (
            <InvoiceItem
              key={invoice.invoice_id}
              id={invoice.invoice_id}
              name={invoice.name_payer}
              date={invoice.due_date + ''}
              amount={invoice.amount}
              status={invoice.status}
            />
          ))
        )}
        {/* {cr3dUser.role === 'vendor' && (
          <div className="mt-4 max-h-96">
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
              to={`/invoices`}
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
        )} */}
      </div>
    </div>
  )
}

export default Home
