import React from 'react'
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
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Please enter email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password is too short'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password much match'),
})

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
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
            Create Account
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              marginTop: '8px',
            }}
          >
            Welcome! Create your Cr3dentials account.
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                field={field}
                type="password"
                label="Confirm Password"
                placeholder="Enter Confirm password"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            )}
          />
          <div className="mt-14">
            <Link to={'/home'}>
              <Button
                label="Sign up"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
              />
            </Link>
          </div>
        </form>

        <CustomDivider label={`sign up`} />

        <SSOButtons />
      </div>
    </AuthLayout>
  )
}

export default Login
