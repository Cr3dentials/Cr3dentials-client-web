import React from 'react'
import Typography from '@mui/material/Typography'
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import OutlinedButton from '@/components/UI/OutlinedButton'
//import { useAppDispatch } from '@/store/hooks'
//import { setModalName } from '@/store/slices/modalSlice'
import { useNavigate } from 'react-router-dom'

export const NewInvoiceModalName = 'NewInvoiceModal'

const NewInvoiceModal: React.FC = () => {
  //const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/create-invoice')
  }

  return (
    <div className="px-5 pt-10 pb-5">
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '20px',
          color: '#0E0E0E',
          marginBottom: '28px',
        }}
      >
        Create New Invoice
      </Typography>
      <div className="mb-5">
        <Input label="Name" placeholder="Invoice Name" type="text" />
      </div>
      <div className="mb-5">
        <Input label="Phone Number" placeholder="Phone Number" type="text" />
      </div>
      <div className="mb-5">
        <Input label="Email" placeholder="Email Address" type="email" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <OutlinedButton
          label="Cancel"
          //onClick={() => dispatch(setModalName(''))}
        />
        <Button label="Next" onClick={handleNextClick} />
      </div>
    </div>
  )
}

export default NewInvoiceModal
