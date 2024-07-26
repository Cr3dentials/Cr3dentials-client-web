import React from 'react'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const InstallmentSelect: React.FC = () => {
  // const [installment, setInstallment] = useState('weekly')

  // const handleChange = (event: SelectChangeEvent) => {
  //   setInstallment(event.target.value as string)
  // }

  return (
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
        Installment
      </Typography>
      <Select
        fullWidth
        labelId="Installment-Select-Label"
        id="Installment-Select"
        name="frequency"
        required
        defaultValue={'0'}
        placeholder="Select a Payment Plan"
        // value={installment}
        // onChange={handleChange}
        IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EBEDF0',
          },
        }}
      >
        <MenuItem value={'0'}>Weekly</MenuItem>
        <MenuItem value={'1'}>Bi-Weekly</MenuItem>
        <MenuItem value={'2'}>Monthly</MenuItem>
      </Select>
    </div>
  )
}

export default InstallmentSelect
