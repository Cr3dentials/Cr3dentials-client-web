import React from 'react'
import GoogleAuthButton from './GoogleAuthButton'
import FacebookAuthButton from './FacebookAuthButton'
import AppleAuthButton from './AppleAuthButton'

const SSOButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <GoogleAuthButton />
      <FacebookAuthButton />
      <AppleAuthButton />
    </div>
  )
}

export default SSOButtons
