import Action from '@/components/UI/Action'
import Button from '@/components/UI/Button'
import Moneyjar from '@/assets/images/Moneyjar.png'

const Empty = () => {
  return (
    <div className="h-3/4">
      <Action
        Icon={
          <img
            //className="w-[105px] h-[105px]"
            src={Moneyjar}
            alt="no invoices"
          />
        }
        subText="Start managing your finances by creating your first invoice."
        text="No Invoices Found"
      >
        <Button className="mt-8" label="Create Your First Invoice" />
      </Action>
    </div>
  )
}

export default Empty
