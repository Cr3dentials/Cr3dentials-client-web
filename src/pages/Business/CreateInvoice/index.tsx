import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CurrencySelect from '@/components/UI/Selects/CurrencySelect'
import PaymentSelect from '@/components/UI/Selects/PaymentSelect'
import DueDate from '@/components/UI/DueDate'
import OutlinedButton from '@/components/UI/OutlinedButton'
import Button from '@/components/UI/Button'
import ModalWrapper from '@/components/UI/Modal/ModalWrapper'
import SuccessImg from '@/assets/images/successImg.png'
import Action from '@/components/UI/Action'
import { useCreateInvoice } from '@/features/createInvoice/hooks'
import { usePrivy } from '@privy-io/react-auth'
import Input from '@/components/UI/Input'
import { generateRandomNumber } from '@/features/createInvoice/utils'
import { useCr3dUser } from '@/features/user/hooks'
import FormControlLabel from '@mui/material/FormControlLabel'
import InstallmentSelect from '@/components/UI/Selects/InstallmentSelect'
import { styled, SwitchProps, Switch } from '@mui/material'

const InstallmentSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 51,
  height: 31,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#4B56E3',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 27,
    height: 27,
  },
  '& .MuiSwitch-track': {
    borderRadius: 31 / 2,
    backgroundColor: '#333743',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

const CreateInvoice: React.FC = () => {
  const [installmentCheckedFlag, setInstallmentCheckedFlag] =
    React.useState(false)
  // const [createInvoiceSuccess, setCreateInvoiceSuccess] = useState(false)
  const createInvoiceMutation = useCreateInvoice()
  const navigate = useNavigate()
  const { user } = usePrivy()
  function closeDialog() {
    //setCreateInvoiceSuccess(false)
    createInvoiceMutation.reset()
  }
  const cr3dUser = useCr3dUser()

  const createInvoiceOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    e,
  ) => {
    e.preventDefault()
    const formEl = e.target as HTMLFormElement
    const payload = [...new FormData(formEl).entries()].reduce(
      (formValuesMap, entry) => {
        return {
          [entry[0]]: entry[1],
          ...formValuesMap,
        }
      },
      {},
    ) as {
      dueDate?: string
      processor: string
      currency: string
      phonePayer: string
      namePayer: string
      amount: string
      description: string
      frequency?: '0' | '1' | '2'
    }

    // console.log(payload)
    createInvoiceMutation.mutate({
      ...payload,
      amount: parseFloat(payload.amount),
      dueDate: payload.dueDate
        ? Math.floor(new Date(payload.dueDate).getTime() / 1000)
        : null,
      payer: user?.wallet?.address!,
      vendorId: user?.wallet?.address!,
      invoiceId: generateRandomNumber(),
      vendorTillNumber: cr3dUser.vendor_till_number!,
      type: installmentCheckedFlag ? 'installments' : 'one-time',
    })
    // createInvoiceMutation.mutate({
    //   invoice_id: generateRandomString(),
    //   due_date: Math.floor(new Date(payload['due-date']).getTime() / 1000),
    //   amount: parseFloat(payload.amount),
    //   currency: payload['Currency-Select'],
    //   processor: payload['Payment-Select'],
    //   payer: payload['phone-payer'],
    //   vendor_id: user?.id!,
    // })
  }

  // const [invoices] = useState<Array<InvoiceItemType>>([
  //   {
  //     id: 1,
  //     title: 'Invoice Item #1',
  //     amount: 253.0,
  //   },
  //   {
  //     id: 2,
  //     title: 'Invoice Item #2',
  //     amount: 380.0,
  //   },
  // ])
  return (
    <div className="p-5">
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
        Create Invoice
      </Typography>
      <form onSubmit={createInvoiceOnSubmit}>
        <div className="mt-4">
          <Input
            required
            name="namePayer"
            label="Name"
            placeholder="Name of Payer"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Input
            required
            name="phonePayer"
            label="Phone Number of Payer"
            placeholder="Phone Number"
            type="text"
          />
        </div>
        {/* <div className="mt-4">
          <Input
            required
            name="email_payer"
            label="Email of Payer"
            placeholder="Email Address"
            type="email"
          />
        </div> */}

        <div className="mt-4">
          <Input
            required
            name="amount"
            label="Amount"
            placeholder="5000"
            type="text"
          />
        </div>
        <FormControlLabel
          control={
            <InstallmentSwitch
              sx={{ m: 1 }}
              onChange={(_, checked) => {
                setInstallmentCheckedFlag(checked)
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '20px',
                color: '#333743',
              }}
            >
              Installment Plan
            </Typography>
          }
          labelPlacement="start"
          name="installment-switch"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 0,
            marginTop: '20px',
            width: '100%',
          }}
        />
        {installmentCheckedFlag && <InstallmentSelect />}
        <div className="mt-4">
          <Input
            required
            name="description"
            label="Description"
            placeholder="Goods or Services"
            type="text"
          />
        </div>

        <div className="mt-4">
          <CurrencySelect />
        </div>
        <div className="mt-4">
          <PaymentSelect />
        </div>
        <div className="mt-4">
          <DueDate />
        </div>
        {/* {installmentCheckedFlag ? null : (
        
        )} */}

        {/* <div className="mt-4 max-h-96 overflow-auto">
          {invoices.map((invoice: InvoiceItemType) => (
            <InvoiceItem
              id={invoice.id}
              key={invoice.id}
              title={invoice.title}
              amount={invoice.amount}
            />
          ))}
        </div> */}
        <div className="mt-4 text-center">
          {/* <OutlinedButton type="button" label="+ Add item or service" /> */}
          <Button
            type="submit"
            label={
              createInvoiceMutation.isPending ? 'Creating...' : 'Create Invoice'
            }
            disabled={createInvoiceMutation.isPending}
            className="mt-8 w-[50%]"
            // onClick={() => {
            //   setCreateInvoiceSuccess(true)
            // }}
          />
        </div>
        {createInvoiceMutation.isError && (
          <span className="mt-4 text-danger-100 text-center block">
            {createInvoiceMutation.error.message ||
              "Sorry,couldn't create invoice.Try again"}
          </span>
        )}
      </form>

      <ModalWrapper
        onClose={closeDialog}
        open={createInvoiceMutation.isSuccess}
      >
        <Action
          Icon={
            <img
              className="w-[105px] h-[105px]"
              src={SuccessImg}
              alt="invoice success creation image"
            />
          }
          text="Invoice has been Created Successfully!"
          subText="Invoice Created Successfully for a Seamless Transaction Record."
        >
          <Button
            onClick={() => {
              navigate('/invoices')
              //TODO: nav to the created invoice
            }}
            label={`That's Great`}
            className="mt-6"
          />
          <OutlinedButton
            onClick={closeDialog}
            label="Create more Invoice"
            className="mt-4"
          />
        </Action>
      </ModalWrapper>
    </div>
  )
}

export default CreateInvoice
