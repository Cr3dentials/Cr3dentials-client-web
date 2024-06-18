import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import InvoiceItem from '@/components/Invoices/InvoiceItem'
import { Link, useNavigate } from 'react-router-dom'
import { useCr3dUser } from '@/features/user/hooks/useCr3dUser'
import { useQuery } from '@tanstack/react-query'
import { fetchCr3dInvoices } from '@/features/invoice/features/api'
import { usePrivy } from '@privy-io/react-auth'
import Moneyjar from '@/assets/images/Moneyjar.png'
import Action from '@/components/UI/Action'
import Button from '@/components/UI/Button'
import LazyLoad from '@/components/UI/LazyLoad'

const Invoices = () => {
  const cr3dUser = useCr3dUser()
  const navigate = useNavigate()
  const { user } = usePrivy()
  const isVendor = cr3dUser.role === 'vendor'
  function renderPageLayout(children: JSX.Element) {
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
        </div>
        {children}
      </div>
    )
  }
  // console.log(
  //   'phone number has ' + cr3dUser.phone_number?.length + 'characters',
  // )
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['invoices'],
    queryFn: () =>
      fetchCr3dInvoices(
        isVendor
          ? { vendor_id: user?.wallet?.address }
          : { phone_payer: cr3dUser.phone_number?.trim() },
      ),
  })
  if (isLoading) {
    return <LazyLoad />
  } else if (isError) {
    return renderPageLayout(<span>Something Bad Happened</span>)
  } else if (isSuccess && data.length === 0) {
    return renderPageLayout(
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
          {isVendor ? (
            <Button
              className="mt-8"
              label="Create Your First Invoice"
              onClick={() => {
                navigate('/create-invoice')
              }}
            />
          ) : null}
        </Action>
      </div>,
    )
  }

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
        {cr3dUser.role === 'vendor' && (
          <Link to={'/create-invoice'}>
            <IconButton className="text-gray-1000">
              <AddIcon />
            </IconButton>
          </Link>
        )}
      </div>
      <div className="mt-4 max-h-96 overflow-auto">
        {data!.map((invoice) => (
          <InvoiceItem
            key={invoice.invoice_id}
            id={invoice.invoice_id}
            name={invoice.name_payer}
            date={invoice.due_date + ''}
            amount={invoice.amount}
            status={invoice.status}
          />
        ))}
      </div>
    </div>
  )
}

export default Invoices
