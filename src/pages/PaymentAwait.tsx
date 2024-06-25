import SuccessImg from '@/assets/images/successImg.png'
import Action from '@/components/UI/Action'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
// import { useMutationState } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
const PaymentAwait = () => {
  //const navigate = useNavigate()
  const [queryparams, _] = useSearchParams()
  // const mutationState = useMutationState({
  //   filters: { mutationKey: ['payInvoice'] },
  // })
  //console.log(mutationState)
  return (
    <div className="p-5 pb-16 min-h-screen">
      <Link
        to={'/invoice/' + queryparams.get('invoice_id')}
        className="block float-left"
      >
        <ArrowBackIosNewIcon />
      </Link>
      <Action
        text="Awaiting Payments"
        subText="Check your phone for the payment"
        Icon={
          <img
            className="w-[105px] h-[105px]"
            src={SuccessImg}
            alt="approve invoice"
          />
        }
      >
        {null}
      </Action>
    </div>
  )
}

export default PaymentAwait
