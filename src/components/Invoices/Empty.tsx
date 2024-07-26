import Action from '@/components/UI/Action'
import Button from '@/components/UI/Button'
import Moneyjar from '@/assets/images/Moneyjar.png'
import { Cr3dUser } from '@/features/user/types'

const Empty = ({ role }: { role: Cr3dUser['role'] }) => {
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
        subText={
          role === 'user'
            ? 'Nothing here'
            : 'Start managing your finances by creating your first invoice.'
        }
        text="No Invoices Found"
      >
        {role === 'vendor' ? (
          <Button className="mt-8 w-[50%]" label="Create Your First Invoice" />
        ) : null}
      </Action>
    </div>
  )
}

export default Empty
