import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import AboutIcon from '@/assets/icons/aboutIcon.svg'
import PrivacyIcon from '@/assets/icons/privacyIcon.svg'
import TermsIcon from '@/assets/icons/termsIcon.svg'

const AboutPanel: React.FC = () => {
  return (
    <div>
      <Typography fontSize={`16px`} lineHeight={`20px`} color={`#474C59`}>
        About Us
      </Typography>
      <div className="mt-2 border border-[#F5F5F8] rounded-[4px] p-4">
        <div className="flex flex-col items-center">
          <Link to={`/profile`} className="flex justify-between mr-auto">
            <div className="flex items-center text-left">
              <img
                className="inline-block"
                src={AboutIcon}
                alt="person profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                About Us
              </Typography>
            </div>
          </Link>
          <Link to={`/profile`} className="flex justify-between mt-4 mr-auto">
            <div className="flex items-center text-left">
              <img
                className="inline-block"
                src={PrivacyIcon}
                alt="person profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Privacy Policy
              </Typography>
            </div>
          </Link>
          <Link to={`/profile`} className="flex justify-between mt-4 mr-auto">
            <div className="flex items-center text-left">
              <img
                className="inline-block"
                src={TermsIcon}
                alt="person profile icon"
              />
              <Typography
                fontWeight={500}
                fontSize={`16px`}
                lineHeight={`20px`}
                marginLeft={`12px`}
              >
                Terms & Conditions
              </Typography>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPanel
