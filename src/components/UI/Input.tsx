/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'

export type InputProps = {
  label: string
  type: string
  placeholder: string
  required?: boolean
  field?: any
  error?: boolean
  helperText?: string
  name?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  required,
  field,
  error,
  name,
  helperText,
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <Box marginBottom={`16px`}>
      <InputLabel
        htmlFor={label}
        sx={{
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '20px',
          color: '#333743',
          marginBottom: '10px',
        }}
      >
        {label} {required ? `*` : ''}
      </InputLabel>
      {type !== 'password' ? (
        <TextField
          {...field}
          id={label}
          type={type}
          name={name}
          variant="outlined"
          required={required}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            sx: {
              borderRadius: 2,
              fontSize: '16px',
              '& .MuiInputBase-input': {
                padding: '14px',
              },
            },
          }}
          error={error}
          helperText={helperText}
        />
      ) : (
        <TextField
          {...field}
          id={label}
          name={name}
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          required={required}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            sx: {
              borderRadius: 2,
              fontSize: '16px',
              '& .MuiInputBase-input': {
                padding: '14px',
              },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={error}
          helperText={helperText}
        />
      )}
    </Box>
  )
}

export default Input
