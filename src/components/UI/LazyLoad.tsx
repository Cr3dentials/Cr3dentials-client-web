import React from 'react'

import CredLogo from '@/assets/icons/credentials.svg'
import Loader from './Loader'

const LazyLoad: React.FC = () => {
  return (
    <div className="min-h-screen mt-auto mb-auto bg-white flex items-center flex-col justify-center">
      <img className="" src={CredLogo} alt="credentials loading icon" />
      <h3 className="text-black leading-9 font-extrabold text-[22px] mt-8">
        Cr3dentials
      </h3>
      <Loader />
    </div>
  )
}

export default LazyLoad
