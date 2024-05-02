import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import InstallmentSelect from '@/components/UI/Selects/InstallmentSelect'
import CurrencySelect from '@/components/UI/Selects/CurrencySelect'
import PaymentSelect from '@/components/UI/Selects/PaymentSelect'
import DueDate from '@/components/UI/DueDate'
import InvoiceItem from '@/components/Business/CreateInvoice/InvoiceItem'
import type { InvoiceItemProps as InvoiceItemType } from '@/components/Business/CreateInvoice/InvoiceItem'
import OutlinedButton from '@/components/UI/OutlinedButton'
import Button from '@/components/UI/Button'
import { useAppDispatch } from '@/store/hooks'
import ModalWrapper from '@/components/UI/Modal/ModalWrapper'
import { useAppSelector } from '@/store/hooks'
import { setModalName } from '@/store/slices/modalSlice'
import { InvoiceSuccessModalName } from '@/components/UI/Modal/InvoiceSuccessModal'

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
  const [installment, setInstallment] = useState(false)
  const dispatch = useAppDispatch()
  const { modalName } = useAppSelector((state) => state.modalReducer)

  useEffect(() => {
    dispatch(setModalName(''))
  }, [])

  const [invoices] = useState<Array<InvoiceItemType>>([
    {
      id: 1,
      title: 'Invoice Item #1',
      amount: 253.0,
    },
    {
      id: 2,
      title: 'Invoice Item #2',
      amount: 380.0,
    },
  ])

  const handleInstallmentChange = (e: SyntheticEvent) => {
    setInstallment((e.target as HTMLInputElement).checked)
  }

  const handleCreate = () => {
    dispatch(setModalName(InvoiceSuccessModalName))
  }

  return (
    <div className="p-5">
      <Link to="/business/home" className="block float-left">
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

      <FormControlLabel
        control={
          <InstallmentSwitch sx={{ m: 1 }} onChange={handleInstallmentChange} />
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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: 0,
          marginTop: '20px',
          width: '100%',
        }}
      />
      {installment && <InstallmentSelect />}
      <div className="mt-4">
        <CurrencySelect />
      </div>
      <div className="mt-4">
        <PaymentSelect />
      </div>
      <div className="mt-4">
        <DueDate />
      </div>
      <div className="mt-4">
        {invoices.map((invoice: InvoiceItemType) => (
          <InvoiceItem
            id={invoice.id}
            key={invoice.id}
            title={invoice.title}
            amount={invoice.amount}
          />
        ))}
      </div>
      <div className="mt-4">
        <OutlinedButton label="+ Add item or service" />
        <Button
          label="Create Invoice"
          className="mt-8"
          onClick={handleCreate}
        />
      </div>
      {modalName !== '' && <ModalWrapper />}
    </div>
  )
}

export default CreateInvoice
