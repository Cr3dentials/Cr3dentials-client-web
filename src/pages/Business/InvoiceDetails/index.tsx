import { Link, useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import InvoiceDetail from '@/components/InvoiceDetails/InvoiceDetail'
import Status from '@/components/UI/Status'
import ActionOnInvoice from '@/components/InvoiceDetails/Actions'
import { useQuery } from '@tanstack/react-query'
import { fetchCr3dInvoices } from '@/features/invoice/features/api'
import LazyLoad from '@/components/UI/LazyLoad'
import dayjs from 'dayjs'
import Receipt from '@/components/Icons/Receipt'
import Installment from '@/components/InvoiceDetails/Installment'
import * as Accordion from '@radix-ui/react-accordion'
import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReactNode } from 'react'

function renderPageLayout(children: JSX.Element) {
  return (
    <div className="p-5 pb-16 min-h-screen">
      <Link to="/home" className="block float-left">
        <ArrowBackIosNewIcon />
      </Link>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          textAlign: 'center',
          lineHeight: '20px',
          color: '#0B1A2C',
          marginTop: '4px',
        }}
      >
        Invoice Details
      </Typography>
      {children}
    </div>
  )
}
const index = () => {
  const params = useParams()
  const invoiceId = params['id']
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['invoices', invoiceId],
    queryFn: () =>
      fetchCr3dInvoices({
        invoice_id: invoiceId,
      }),
    select(data) {
      return data[0]
    },
  })
  if (isLoading) {
    return <LazyLoad />
  } else if (!isSuccess) {
    return renderPageLayout(
      <span className="text-center block mt-4">
        Sorry, something bad happened.Try again
      </span>,
    )
  } else if (data === undefined) {
    return renderPageLayout(
      <span className="text-center block mt-4 w-full">
        Sorry, No invoice found
      </span>,
    )
  }

  let receivedInstallments = []
  let installmentsNode: ReactNode | null = null
  if (
    data.type === 'installments' &&
    data.installmentPlans &&
    data.installmentPlans.length
  ) {
    receivedInstallments = data.installmentPlans.filter((ins) =>
      ins.status.startsWith('paid'),
    )

    installmentsNode = (
      <div className="">
        <Accordion.Root
          className="bg-gray-200 w-full rounded-lg p-4 mt-3"
          type="single"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <Receipt />
                  <span className="font-semibold pl-2">
                    {receivedInstallments.length}/{data.installmentPlans.length}{' '}
                    installments received
                  </span>
                </div>
                <ExpandMoreIcon aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {data.installmentPlans.map((ins, index) => (
                <Installment
                  status={ins.status}
                  date={dayjs(
                    new Date(parseInt(ins.due_date + '') * 1000),
                  ).format('MMM DD, YYYY')}
                  name={`Installment ${index + 1}`}
                />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        {/* <div
          className="mt-3 mb-3 bg-gray-300"
          style={{
            height: '1px',
          }}
        ></div> */}

        {/* <>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
            }}
          >
            Invoice Summary
          </Typography>
          <div className="grid grid-cols-1 mt-4 overflow-auto max-h-48">
            <div className="pl-2 pt-4 pb-4 flex justify-between border-b border-gray-300 last:border-0 pr-2">
              <span className="font-normal text-base text-gray-1000">Item</span>
              <span className="font-semibold text-lg text-gray-1000">
                Item 1
              </span>
            </div>
            <div className="pl-2 pt-4 pb-4 flex justify-between border-b border-gray-300 last:border-0 pr-2">
              <span className="font-normal text-base text-gray-1000">
                Price
              </span>
              <span className="font-semibold text-lg text-gray-1000">$200</span>
            </div>
          </div>
          <div className="pl-2 pt-4 pb-4 flex justify-between bg-gray-300 pr-2">
            <span className="font-semibold text-lg text-gray-1000">
              Total Price
            </span>
            <span className="font-semibold text-lg text-gray-1000">$200</span>
          </div>
        </> */}
      </div>
    )
  }

  return (
    <div className="p-5 pb-16 min-h-screen">
      <Link to="/home" className="block float-left">
        <ArrowBackIosNewIcon />
      </Link>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          textAlign: 'center',
          lineHeight: '20px',
          color: '#0B1A2C',
          marginTop: '4px',
        }}
      >
        Invoice Details
      </Typography>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <InvoiceDetail
          title="Invoices from"
          detail={data.vendor_id.substring(0, 5) + '...'}
        />
        <InvoiceDetail title="Invoices to" detail={data.name_payer} />
        {/**TODO: due_date should come as a number just like is being sent. */}
        <InvoiceDetail
          detail={dayjs(new Date(parseInt(data.due_date + '') * 1000)).format(
            'MMM DD, YYYY',
          )}
          title={'Due Date'}
        />
        {/* <InvoiceDetail detail="Next Payment Date" title={'Installment Done'} />
        <InvoiceDetail detail="Installment-Weekly" title={'Type'} /> */}
        <InvoiceDetail title={'Status'}>
          <Status status={data.status} />
        </InvoiceDetail>
        <InvoiceDetail title="Amount" detail={data.amount + ''} />
        <InvoiceDetail title="Currency" detail={data.currency} />
        <InvoiceDetail title="Invoice ID" detail={data.invoice_id + ''} />
        <InvoiceDetail title="Type" detail={data.type} />
      </div>
      <div style={{ height: '161px' }}></div>
      {data && (
        <Container maxWidth={'sm'}>
          <ActionOnInvoice {...data} />
        </Container>
      )}
      {installmentsNode}

      {/* <ButtonMUI
        fullWidth
        startIcon={<LinkIcon />}
        className="text-primary-0 h-12 mt-4"
        variant="text"
        href="https://sepolia.etherscan.io/tx"
        target="__blank"
      >
        <span className="font-semibold text-base">
          https://sepolia.etherscan.io/tx
        </span>
      </ButtonMUI> */}
    </div>
  )
}

export default index
