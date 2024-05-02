import React from 'react'
import CustomerItem from './CustomerItem'
import type { CustomerItemProps as CustomerItemType } from './CustomerItem'

const customers: Array<CustomerItemType> = [
  {
    id: 1,
    name: 'Christopher Barton',
    avatar: '',
    email: 'christopherbarton@gmail.com',
  },
  {
    id: 2,
    name: 'Christopher Barton',
    avatar: '',
    email: 'christopherbarton@gmail.com',
  },
  {
    id: 3,
    name: 'Christopher Barton',
    avatar: '',
    email: 'christopherbarton@gmail.com',
  },
  {
    id: 4,
    name: 'Christopher Barton',
    avatar: '',
    email: 'christopherbarton@gmail.com',
  },
  {
    id: 5,
    name: 'Christopher Barton',
    avatar: '',
    email: 'christopherbarton@gmail.com',
  },
]
const CustomerTab: React.FC = () => {
  return (
    <div className="min-h-[600px]">
      {customers.map((customer: CustomerItemType) => (
        <CustomerItem
          key={customer.id}
          id={customer.id}
          name={customer.name}
          avatar={customer.avatar}
          email={customer.email}
        />
      ))}
    </div>
  )
}

export default CustomerTab
