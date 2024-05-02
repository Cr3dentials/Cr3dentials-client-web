import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import PersonIcon from '@/assets/icons/personIcon.svg'
import PhoneIcon from '@/assets/icons/phoneIcon.svg'
import BankIcon from '@/assets/icons/bankIcon.svg'

const SettingPanel: React.FC = () => {
  return (
    <div>
      <Typography fontSize={`16px`} lineHeight={`20px`} color={`#474C59`}>
        Settings
      </Typography>
      <div className="mt-2 border border-[#F5F5F8] rounded-[4px] p-4">
        <div className="flex flex-col items-center">
          <Link
            to={`/business/profile`}
            className="flex justify-between mr-auto"
          >
            <div className="flex items-center text-left">
              <img
                className="inline-block"
                src={PersonIcon}
                alt="person profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Profile
              </Typography>
            </div>
            <div></div>
          </Link>
          <Link
            to={`/business/profile`}
            className="flex items-center justify-between w-full mt-4"
          >
            <div className="flex items-center">
              <img
                className="inline-block"
                src={PhoneIcon}
                alt="phone profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Phone Number
              </Typography>
            </div>
            <div>
              <Typography
                fontWeight={400}
                fontSize={`16px`}
                lineHeight={`20px`}
                color={`#20C375`}
              >
                Verified
              </Typography>
            </div>
          </Link>
          <Link
            to={`/business/profile`}
            className="flex items-center justify-between w-full mt-4"
          >
            <div className="flex items-center">
              <img
                className="inline-block"
                src={BankIcon}
                alt="bank profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Bank Statement
              </Typography>
            </div>
            <div>
              <Typography
                fontWeight={400}
                fontSize={`16px`}
                lineHeight={`20px`}
                color={`#20C375`}
              >
                Verified
              </Typography>
            </div>
          </Link>
          <Link
            to={`/business/profile`}
            className="flex items-center justify-between w-full mt-4"
          >
            <div className="flex items-center">
              <img
                className="inline-block"
                src={BankIcon}
                alt="bank profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Mpesa Statement
              </Typography>
            </div>
            <div>
              <Typography
                fontWeight={400}
                fontSize={`16px`}
                lineHeight={`20px`}
                color={`#20C375`}
              >
                Verified
              </Typography>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SettingPanel
