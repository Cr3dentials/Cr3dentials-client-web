import React from 'react'
import MuiButton from '@mui/material/Button'
import { twMerge } from 'tailwind-merge'
export type ButtonProps = {
  disabled?: boolean | undefined
  loading?: boolean | undefined
  loadingContent?: string | undefined
  label: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  name?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  label,
  type,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <MuiButton
        disabled={disabled}
        className={twMerge(
          'bg-primary-0 rounded-[100px] text-white text-[16px] leading-[12px] h-[56px] w-full',
          className,
        )}
        disableElevation
        onClick={onClick}
        variant="contained"
        type={type}
        sx={{
          '&.Mui-disabled': {
            backgroundColor: '#DCDDFA',
            color: 'white',
          },
        }}
      >
        {label}
      </MuiButton>
    </>
  )
}

export default Button
