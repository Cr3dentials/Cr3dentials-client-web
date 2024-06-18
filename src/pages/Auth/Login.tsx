import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'
import { Controller, useForm } from 'react-hook-form'
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Typography from '@mui/material/Typography'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import _ from 'lodash'
import CustomDivider from '@/components/Auth/CustomDivider'
import SSOButtons from '@/components/Auth/SSOButtons'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Please enter email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password is too short'),
})

const defaultValues = {
  email: '',
  password: '',
}

const Login: React.FC = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  })

  const { isValid, dirtyFields, errors } = formState

  const onSubmit = ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    console.log(email, password)
  }

  return (
    <AuthLayout>
      <div className="mt-6">
        <div>
          <Typography
            variant="h2"
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '30px',
            }}
          >
            Welcome back 👋
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              marginTop: '8px',
            }}
          >
            Log in to your Cr3dentials account.
          </Typography>
        </div>
        <form
          name="login-form"
          noValidate
          className="flex flex-col justify-center w-full mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                field={field}
                type="email"
                label="Email"
                placeholder="Enter email address"
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                field={field}
                type="password"
                label="Password"
                placeholder="Enter password"
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            )}
          />
          <Link to={`/forgot-password`}>
            <Typography
              variant="caption"
              mt={1}
              sx={{
                color: '#4B56E3',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '12px',
                textAlign: 'right',
                display: 'block',
              }}
            >
              Forgot Password?
            </Typography>
          </Link>
          <div className="mt-14">
            <Link to={'/home'}>
              <Button
                label="Login"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
              />
            </Link>
          </div>
        </form>

        <CustomDivider label="sign in" />

        <SSOButtons />
      </div>
    </AuthLayout>
  )
}

export default Login
