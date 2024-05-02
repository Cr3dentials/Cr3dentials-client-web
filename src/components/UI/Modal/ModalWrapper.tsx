import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setModalName } from '@/store/slices/modalSlice'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

import NewInvoiceModal, { NewInvoiceModalName } from './NewInvoiceModal'
import InvoiceSuccessModal, {
  InvoiceSuccessModalName,
} from './InvoiceSuccessModal'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalWrapper: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const { modalName } = useAppSelector((state) => state.modalReducer)

  useEffect(() => {
    if (modalName !== ``) {
      setOpen(true)
    }
  }, [modalName])

  const handleClose = () => {
    dispatch(setModalName(''))
    setOpen(false)
  }

  return (
    <>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            margin: 0,
            marginTop: 'auto',
            borderRadius: '24px 24px 0 0',
          },
        }}
      >
        {modalName === NewInvoiceModalName && <NewInvoiceModal />}
        {modalName === InvoiceSuccessModalName && <InvoiceSuccessModal />}
      </Dialog>
    </>
  )
}

export default ModalWrapper
