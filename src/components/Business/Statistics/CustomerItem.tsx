import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'

export type CustomerItemProps = {
  id: number
  avatar: string
  name: string
  email: string
}

const CustomerItem: React.FC<CustomerItemProps> = ({
  name,
  email,
}: CustomerItemProps) => {
  return (
    <div className="grid grid-cols-6 border-b border-[#EBEDF0] py-4">
      <div className="flex items-center col-span-1">
        <Avatar alt="A" src="" />
      </div>
      <div className="flex flex-col col-span-4">
        <Typography fontWeight={500} fontSize={`16px`} lineHeight={`20px`}>
          {name}
        </Typography>
        <Typography
          mt={1}
          fontWeight={400}
          fontSize={`14px`}
          lineHeight={`17px`}
          color={`#767C8C`}
        >
          {email}
        </Typography>
      </div>
      <div className="flex items-center justify-end col-span-1">
        <IconButton>
          <SvgIcon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.0001" cy="9.99999" r="8.33333" stroke="#4B56E3" />
              <path
                d="M10 14.1667V9.16666"
                stroke="#4B56E3"
                strokeLinecap="round"
              />
              <ellipse
                cx="0.833333"
                cy="0.833333"
                rx="0.833333"
                ry="0.833333"
                transform="matrix(1 0 0 -1 9.16675 7.5)"
                fill="#4B56E3"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </div>
    </div>
  )
}

export default CustomerItem
