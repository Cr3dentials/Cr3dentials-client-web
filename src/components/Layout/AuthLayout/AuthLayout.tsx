import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return (
    <div className="p-5 pb-16">
      <Link to={'/'}>
        <ArrowBackIosNewIcon />
      </Link>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
