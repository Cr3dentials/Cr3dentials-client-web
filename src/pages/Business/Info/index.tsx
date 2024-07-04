import Input from '@/components/UI/Input'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '@mui/material/MenuItem'
import Button from '@/components/UI/Button'
import { useCreateCr3dUser } from '@/features/user/hooks'
import { useSearchParams } from 'react-router-dom'
import React from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { handleRedirect } from '@/pages/Onboarding'
const index = () => {
  // const navigate = useNavigate()
  const { authenticated, user } = usePrivy()
  const [params, _] = useSearchParams()
  //co
  const industries = [
    'Retail',
    'E-commerce',
    'Technology',
    'Healthcare',
    'Professional Services',
    'Construction and Real Estate',
    'Manufacturing',
    'Hospitality',
    'Education',
    'Non-Profit',
    'Agriculture',
    'Entertainment and Media',
    'Transportation and Logistics',
  ]
  const createCr3dUserMutation = useCreateCr3dUser()
  const createcr3dVendorAccountOnSubmit: React.FormEventHandler<
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
      //phone_vendor: string
      //till_vendor: string
      vendor_till_number: string
      name_vendor: string
    }
    createCr3dUserMutation.mutate(
      {
        role: 'vendor',
        created_at: Math.floor(user!.createdAt.getTime() / 1000),
        vendor_till_number: payload.vendor_till_number,
        //phone_vendor: payload.phone_vendor,
        //name_vendor: payload.name_vendor,
      },
      {
        onSuccess() {
          handleRedirect(params)
        },
      },
    )
    //console.log(payload)
  }

  if (!authenticated) {
    window.location.pathname = '/'
  }

  //requirement-privy auth
  //create user vendor ,here
  //if the user profile exists....redirect to home
  //if the user is not privy auth..redirect to /
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
       Let's Build Your Business Profile
      </Typography>
      <form onSubmit={createcr3dVendorAccountOnSubmit}>
        <div className="mt-4">
          <Input
            required
            label="Business name"
            type="text"
            placeholder="Business name"
            name="name_vendor"
          />
        </div>
        <div className="mt-4">
          <Input
            label="Till Number"
            required
            type="number"
            placeholder="Enter Business Till Number"
            name="vendor_till_number"
          />
        </div>
        {/* <div className="mt-4">
          <Input
            required
            name="phone_vendor"
            label="Phone Number"
            placeholder="Enter Business Phone Number"
            type="text"
          />
        </div> */}
        <div className="mt-4">
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              color: '#333743',
              marginBottom: '8px',
            }}
          >
            Country of Operation
          </Typography>
          <Select
            fullWidth
            labelId="Country of Operation-Label"
            id="Country of Operation"
            placeholder="Country of Operation"
            name="country"
            defaultValue={'GH'}
            required
            IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#EBEDF0',
              },
              '& .MuiSelect-outlined': {
                display: 'flex',
                alignItems: 'center',
                paddingY: '12px',
              },
            }}
          >
            <MenuItem value={`GH`}>
              <span className="ml-3">Ghana</span>
            </MenuItem>
            <MenuItem value={`NIG`}>
              <span className="ml-3">Kenya</span>
            </MenuItem>
          </Select>
        </div>
        <div className="mt-4">
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              color: '#333743',
              marginBottom: '8px',
            }}
          >
            Business Type
          </Typography>
          <Select
            fullWidth
            required
            labelId="Business Type-Label"
            id="Business Type"
            placeholder="Business Type"
            name="business_type"
            defaultValue={industries[0]}
            IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#EBEDF0',
              },
              '& .MuiSelect-outlined': {
                display: 'flex',
                alignItems: 'center',
                paddingY: '12px',
              },
            }}
          >
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                <span className="ml-3">{industry}</span>
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="mt-4">
          <Button
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
              "Sorry,couldn't create invoice.Try again"}
          </span>
        )}
      </form>
    </div>
  )
}

export default index
