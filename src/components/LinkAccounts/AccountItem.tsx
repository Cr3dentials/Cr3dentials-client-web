import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export type AccountItemProps = {
  id: number
  image: any
  lastNum: string
  name: string
}

const AccountItem: React.FC<AccountItemProps> = ({
  //  id,
  image,
  lastNum,
  name,
}: AccountItemProps) => {
  return (
    <div className="flex py-[10px] justify-between mt-2 border-b border-[#F5F5F8]">
      <div className="flex items-center">
        <img
          className="inline-block w-12 h-12"
          src={image}
          alt="account image"
        />
        <div className="block ml-[70px]">
          <div className="flex flex-col items-center ml-[-50px]">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              **** **** **** {lastNum}
            </Typography>
            <Typography
              mt={2}
              sx={{
                fontSize: '14px',
                lineHeight: '17px',
                color: '#767C8C',
              }}
            >
              {name}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          variant="text"
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '12px',
            color: '#4B56E3',
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  )
}

export default AccountItem
