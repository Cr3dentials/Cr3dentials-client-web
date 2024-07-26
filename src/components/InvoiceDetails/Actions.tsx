import Action from '../UI/Action'
import Button from '../UI/Button'
import SuccessImg from '@/assets/images/successImg.png'
import RoughDollar from '@/assets/images/RoughDollar.png'
import OutlinedButton from '../UI/OutlinedButton'
import { useState } from 'react'
import ModalWrapper from '../UI/Modal/ModalWrapper'
// import ButtonMUI from '@mui/material/Button'
// import LinkIcon from '@/components/Icons/Link'
import { useCr3dUser } from '@/features/user/hooks'
import { invoice } from '@/features/invoice/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  declineInvoice,
  payInstallment,
  payInvoice,
  payInvoiceInstallmentPayload,
  payInvoicePayload,
  signInvoice,
} from '@/features/invoice/features/api'
import { useNavigate } from 'react-router-dom'
import { type status } from '../UI/Status'
//import { isPending } from '@reduxjs/toolkit'

const Approve = ({ onAction }: { onAction: (action: actions) => void }) => (
  <Action
    text="Approve Invoice"
    subText="Are you sure that you want to approve the invoice?"
    Icon={
      <img
        className="w-[105px] h-[105px]"
        src={SuccessImg}
        alt="approve invoice"
      />
    }
  >
    <Button
      label={`Approve`}
      onClick={() => {
        onAction('active')
      }}
      className="mt-6 w-[50%]"
    />
    <OutlinedButton
      onClick={() => {
        onAction('decline')
      }}
      label="Decline Invoice"
      className="mt-4"
    />
  </Action>
)

const PayInvoice = ({
  closeModal,
  amount,
  status,
  ...payload
}: {
  closeModal?: () => void
  status: status
  amount: string
  phone_payer: string
  invoice_id: number
}) => {
  const isInvoicePaid = status.startsWith('paid')
  const client = useQueryClient()
  const invoice = client.getQueryData<invoice>([
    'invoices',
    payload.invoice_id + '',
  ])!

  const installmentsMap = {
    'one-time': {
      actionText: 'Pay Invoice',
      mutationFn: function (payload: payInvoicePayload) {
        return payInvoice(payload)
      },
      buttonLabelSuccess: 'Invoice Paid',
    },
    installments: {
      actionText: `Pay Installment ${
        (invoice.installmentPlans?.filter((ins) =>
          ins.status.startsWith('paid'),
        ).length || 0) + 1
      }`,
      buttonLabelSuccess: 'Installment Paid',
      mutationFn: function (payload: payInvoiceInstallmentPayload) {
        return payInstallment(payload)
      },
    },
  }

  const payInvoiceMutation = useMutation({
    mutationKey: ['payInvoice'],
    mutationFn: installmentsMap[invoice.type].mutationFn,
  })
  //console.log(status)
  //const mutationS
  //const navigate = useNavigate()
  return (
    <Action
      text="Pay Invoice"
      subText={'Invoice signed successfully.Awaiting Payment'}
      Icon={
        <img
          className="w-[105px] h-[105px]"
          src={SuccessImg}
          alt="approve invoice"
        />
      }
    >
      <>
        <Button
          disabled={payInvoiceMutation.isPending || isInvoicePaid}
          label={
            payInvoiceMutation.isPending
              ? 'Awaiting Payment'
              : isInvoicePaid
              ? 'Invoice Paid'
              : 'Pay Invoice'
          }
          onClick={() => {
            //onAction('active')
            //places the pay invoice mutation in flight
            //@ts-expect-error
            let payInvoicePayloadObj: payInvoicePayload & {
              installment_id: number
            } = {
              amount: parseFloat(amount),
              ...payload,
            }
            if (invoice.type === 'installments' && invoice.installmentPlans) {
              const nextInstallmentToPay = invoice.installmentPlans.find(
                (ins) => ['pending', 'overdue'].includes(ins.status),
              )!
              payInvoicePayloadObj = {
                ...payInvoicePayloadObj,
                amount: parseFloat(nextInstallmentToPay.amount),
                installment_id: nextInstallmentToPay?.installment_id!,
              }
            }
            payInvoiceMutation.mutate(payInvoicePayloadObj, {
              onSuccess() {
                closeModal?.()
                client.invalidateQueries({
                  queryKey: ['invoices', payload.invoice_id + ''],
                })
              },
              onError() {
                console.log()
              },
            })
            // payInvoiceMutation.mutate({
            //   amount: parseFloat(amount),
            //   ...payload,
            // })
            // navigate('/payments-await/?invoice_id=' + payload.invoice_id)
          }}
          className="mt-6 w-[50%]"
        />
        <OutlinedButton
          disabled={payInvoiceMutation.isPending}
          onClick={closeModal}
          label="Cancel"
          className="mt-4"
        />
        {payInvoiceMutation.isError && (
          <span className="mt-4 text-danger-100 text-center block">
            {payInvoiceMutation.error.message ||
              "Sorry,couldn't pay invoice.Try again"}
          </span>
        )}
      </>
    </Action>
  )
}

const ActionConfirmation = ({
  actionFlag,
  status,
  children,
}: {
  closeModal?: () => void
  actionFlag: actions
  status: status
  children?: React.ReactNode
}) => (
  <Action
    subText={`Are you sure that you want to ${actionFlag} the invoice??`}
    text={`Invoice is now ${status}`}
    Icon={
      <img
        className="w-[105px] h-[105px]"
        src={RoughDollar}
        alt="active invoice"
      />
    }
  >
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
    {children}
  </Action>
)

type actions = 'approve' | 'active' | 'decline' | 'pay' | 'cancel'
const Actions = ({ invoice_id, amount, phone_payer, status }: invoice) => {
  const cr3dUser = useCr3dUser()
  const client = useQueryClient()
  const isVendor = cr3dUser.role === 'vendor'
  const navigate = useNavigate()
  const [actionFlag, setActionFlag] = useState<actions | ''>('')
  //TODO:you can put the mutations into one single mutations..which the mutation func is a HOF takes a promise factory functions
  const {
    mutate: signInvoiceMutation,
    isPending: isSigningInvoice,
    isError,
    error,
  } = useMutation({
    mutationKey: ['sign_invoice'],
    mutationFn: signInvoice,
    onSuccess() {
      client.invalidateQueries({
        queryKey: ['invoices', invoice_id + ''],
      })
      setActionFlag('pay')
    },
  })
  const declineInvoiceMutation = useMutation({
    mutationKey: ['decline_invoice'],
    mutationFn: declineInvoice,
  })

  const openDialog = Boolean(actionFlag)
  //const signed = status === 'active'
  const actionToDialogBody = {
    active: (
      <ActionConfirmation
        actionFlag="active"
        status={status}
        closeModal={closeModal}
      />
    ),
    cancel: (
      <ActionConfirmation
        actionFlag="cancel"
        status={status}
        //closeModal={closeModal}
      >
        <Button
          label={
            declineInvoiceMutation.isPending ? 'Please wait' : 'Cancel Invoice'
          }
          disabled={declineInvoiceMutation.isPending}
          onClick={() => {
            declineInvoiceMutation.mutate(
              {
                invoiceId: invoice_id,
              },
              {
                onSuccess() {
                  navigate('/invoices')
                },
              },
            )
          }}
          className="mt-6 w-[50%]"
        />
      </ActionConfirmation>
    ),
    approve: <Approve onAction={setActionFlag} />,
    pay: (
      <PayInvoice
        amount={amount + ''}
        phone_payer={phone_payer}
        invoice_id={invoice_id}
        closeModal={closeModal}
        status={status}
      />
    ),
    decline: null,
  }
  function closeModal() {
    setActionFlag('')
  }
  const isInvoicePaid = status.startsWith('paid')
  if (isVendor) {
    const statusToNode: {
      [invoiceStatus in status]?: {
        textColor: string
        textLabel: string
      } | null
    } = {
      pending: {
        textColor: 'text-primary-0',
        textLabel: 'Pending Signature',
      },
      active: {
        textColor: 'text-success',
        textLabel: 'Pending Payment',
      },
      paid: {
        textColor: 'text-success',
        textLabel: 'Payment Made Successfully',
      },
      overdue: {
        textColor: 'text-danger-100',
        textLabel: 'Payment Overdue',
      },
    }

    const statusNode = statusToNode[isInvoicePaid ? 'paid' : status]
    return (
      <div className="absolute bottom-0 flex flex-col items-center justify-center -ml-5 mb-1 border-t mt-4 border-gray-300 max-w-screen-sm w-full">
        {!isInvoicePaid && (
          <Button
            className="mt-4 bg-danger-100 hover:bg-danger-100 w-[50%]"
            label="Cancel Invoice"
            onClick={() => {
              setActionFlag('cancel')
            }}
          />
        )}
        {statusNode ? (
          <span className={statusNode.textColor}>{statusNode.textLabel}</span>
        ) : null}
        <ModalWrapper onClose={closeModal} open={openDialog}>
          {openDialog ? actionToDialogBody[actionFlag as actions] : null}
        </ModalWrapper>
      </div>
    )
  }
  const statusToTextActionNode: { [key in status]?: JSX.Element } = {
    pending: (
      <>
        <Button
          onClick={() => {
            signInvoiceMutation({
              invoice_id,
              payer: cr3dUser.username,
            })
          }}
          disabled={isSigningInvoice || declineInvoiceMutation.isPending}
          label={isSigningInvoice ? 'Please wait...' : 'Sign invoice'}
          className="w-[50%] mt-4"
        />
        <Button
          className="mt-4 hover:bg-danger-100 bg-danger-100 w-[50%]"
          disabled={declineInvoiceMutation.isPending || isSigningInvoice}
          label={
            declineInvoiceMutation.isPending ? 'Please wait' : 'Decline Invoice'
          }
          onClick={() => {
            declineInvoiceMutation.mutate(
              {
                invoiceId: invoice_id,
              },
              {
                onSuccess() {
                  navigate('/invoices')
                },
              },
            )
          }}
        />
      </>
    ),
    active: (
      <Button
        disabled={isInvoicePaid}
        className="hover:bg-success bg-success w-[50%] mt-4"
        onClick={() => {
          setActionFlag('pay')
        }}
        label={'Pay invoice'}
      />
    ),
  }
  return (
    <div className="absolute bottom-0 flex flex-col items-center justify-center -ml-5 mb-1 border-t mt-4 border-gray-300 max-w-screen-sm w-full">
      {statusToTextActionNode[status] || null}
      {(isError || declineInvoiceMutation.isError) && (
        <span className="mt-4 text-danger-100 text-center block">
          {error?.message || declineInvoiceMutation?.error?.message}
        </span>
      )}
      {/* <Button
        label={`Approve Invoice`}
        onClick={() => {
          setActionFlag('approve')
        }}
        className="mt-6 w-full"
      />
      <Button label={'Cancel Invoice'} className="mt-6 w-full bg-danger-100" />
     */}
      <ModalWrapper onClose={closeModal} open={openDialog}>
        {openDialog ? actionToDialogBody[actionFlag as actions] : null}
      </ModalWrapper>
    </div>
  )
}

export default Actions
