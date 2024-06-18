import React from 'react'
import PaidIcon from '@/assets/icons/paidIcon.svg'
import OverdueIcon from '@/assets/icons/overdueIcon.svg'
import ActiveIcon from '@/assets/icons/activeIcon.svg'
import FilterButton from './FilterButton'
import type { FilterButtonProps } from './FilterButton'

const filterButtons: Array<FilterButtonProps> = [
  {
    id: 1,
    title: 'Paid',
    icon: PaidIcon,
    link: '/invoices',
  },
  {
    id: 2,
    title: 'Overdue',
    icon: OverdueIcon,
    link: '/invoices',
  },
  {
    id: 3,
    title: 'Active',
    icon: ActiveIcon,
    link: '/invoices',
  },
]

const FilterButtons: React.FC = () => {
  return (
    <div className="rounded-[8px] bg-[#EDEEFC] p-6 flex justify-between items-center">
      {filterButtons.map((button: FilterButtonProps) => (
        <FilterButton
          key={button.id}
          id={button.id}
          title={button.title}
          icon={button.icon}
          link={button.link}
        />
      ))}
    </div>
  )
}

export default FilterButtons
