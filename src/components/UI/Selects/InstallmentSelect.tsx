import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Select, { SelectChangeEvent } from '@mui/material/Select'
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
        name="Installment-Select"
        required
        defaultValue={'weekly'}
        // value={installment}
        // onChange={handleChange}
        IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EBEDF0',
          },
        }}
      >
        <MenuItem value={`weekly`}>Weekly</MenuItem>
        <MenuItem value={`monthly`}>Monthly</MenuItem>
      </Select>
    </div>
  )
}

export default InstallmentSelect
