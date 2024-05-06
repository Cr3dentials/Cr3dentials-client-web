import React from 'react'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalWrapper = ({
  open,
  onClose,
  children,
  ...restOfProps
}: DialogProps) => {
  return (
    <>
      <Dialog
        {...restOfProps}
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
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
        {children}
        {/* {modalName === NewInvoiceModalName && <NewInvoiceModal />}
        {modalName === InvoiceSuccessModalName && <InvoiceSuccessModal />} */}
      </Dialog>
    </>
  )
}

export default ModalWrapper
