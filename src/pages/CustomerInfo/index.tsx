import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import { useCreateCr3dUser } from '@/features/user/hooks'
import { Typography } from '@mui/material'
import React from 'react'
import { handleRedirect } from '../Onboarding'
import { useSearchParams } from 'react-router-dom'
import { usePrivy } from '@privy-io/react-auth'

const index = () => {
  const createCr3dUserMutation = useCreateCr3dUser()
  const [params, _] = useSearchParams()
  const { user } = usePrivy()
  const createCr3dUserAccountOnSubmit: React.FormEventHandler<
    HTMLFormElement
  > = (e) => {
    e.preventDefault()
    const formEl = e.target as HTMLFormElement
    const payload = [...new FormData(formEl).entries()].reduce((a, b) => {
      return {
        [b[0]]: b[1],
        ...a,
      }
    }, {}) as {
      phone_number: string
    }

    createCr3dUserMutation.mutate(
      {
        role: 'user',
        phone_number: payload.phone_number,
        created_at: Math.floor(user!.createdAt.getTime() / 1000),
      },
      {
        onSuccess() {
          handleRedirect(params)
        },
        // onError(error, variables, context) {
        //   console.log({
        //     error,
        //     variables,
        //     context,
        //   })
        // },
      },
    )
  }
  return (
    <div className="p-5 pb-16 min-h-screen">
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          textAlign: 'center',
          lineHeight: '20px',
          color: '#0B1A2C',
          marginTop: '4px',
        }}
      >
        Just a little more...
      </Typography>
      <form onSubmit={createCr3dUserAccountOnSubmit}>
        <div className="mt-4">
          <Input
            required
            name="phone_number"
            label="Phone Number"
            placeholder="Enter Phone Number"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Button
            className="w-[50%]"
            disabled={createCr3dUserMutation.isPending}
            type="submit"
            label={
              createCr3dUserMutation.isPending ? 'Please wait...' : 'Proceed'
            }
          />
        </div>
        {createCr3dUserMutation.isError && (
          <span className="mt-4 text-danger-100 text-center block">
            {createCr3dUserMutation.error.message ||
              "Sorry,couldn't create cr3d user.Try again"}
          </span>
        )}
      </form>
    </div>
  )
}

export default index
