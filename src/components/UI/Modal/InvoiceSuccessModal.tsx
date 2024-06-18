import React from 'react'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
//import { useAppDispatch } from '@/store/hooks'
//import { setModalName } from '@/store/slices/modalSlice'
import Button from '@/components/UI/Button'
import OutlinedButton from '@/components/UI/OutlinedButton'
import SuccessImg from '@/assets/images/successImg.png'
//import { NewInvoiceModalName } from '@/components/UI/Modal/NewInvoiceModal'

export const InvoiceSuccessModalName = `InvoiceSuccessModal`
//TODO:use Action for it and move to it's correct location
const InvoiceSuccessModal: React.FC = () => {
  const navigate = useNavigate()
  //const dispatch = useAppDispatch()

  const handleSuccess = () => {
    navigate('/home')
    //d//ispatch(setModalName(''))
  }

  const handleCreateMore = () => {
    navigate('/home')
    //dispatch(setModalName(NewInvoiceModalName))
  }
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-4">
      <img
        className="w-[105px] h-[105px]"
        src={SuccessImg}
        alt="invoice success creation image"
      />
      <Typography
        variant="h4"
        mt={5}
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '30px',
          textAlign: 'center',
        }}
      >
        Invoice has been Created Successfully!
      </Typography>
      <Typography
        variant="body2"
        mt={2}
        sx={{
          fontSize: '16px',
          lineHeight: '20px',
          color: '#474C59',
          textAlign: 'center',
        }}
      >
        Invoice Created Successfully for a Seamless Transaction Record.
      </Typography>

      <Button label={`That's Great`} className="mt-6" onClick={handleSuccess} />
      <OutlinedButton
        label="Create more Invoice"
        className="mt-4"
        onClick={handleCreateMore}
      />
    </div>
  )
}

export default InvoiceSuccessModal
