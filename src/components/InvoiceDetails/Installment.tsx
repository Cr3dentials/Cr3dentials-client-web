import { type status, default as InstallmentStatus } from '../UI/Status'
import Typography from '@mui/material/Typography'

type installmentPayment = {
  name: string
  date: string
  status: status
}
const Installment = ({ name, status, date }: installmentPayment) => {
  return (
    <div className="mt-[10px]">
      <div className="flex items-center justify-between">
        <span
          className="font-medium text-lg leading-5"
          // sx={{
          //   fontWeight: 500,
          //   fontSize: '16px',
          //   lineHeight: '20px',
          // }}
        >
          {name}
        </span>
        <InstallmentStatus status={status} />
      </div>
      <div className="mt-2">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '17px',
          }}
        >
          {date}
        </Typography>
      </div>
    </div>
  )
}

export default Installment
