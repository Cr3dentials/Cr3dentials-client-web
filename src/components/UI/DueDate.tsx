import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import InputAdornment from '@mui/material/InputAdornment'
import SVGIcon from '@mui/material/SvgIcon'
import dayjs from 'dayjs'
import Input from './Input'

const DueDate: React.FC = () => {
  // const handleDateChange = (e: any) => {
  //   console.log(e)
  // }
  // const [date, setDate] = useState<dayjs.Dayjs | null>(null)

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
        Due Date
      </Typography>
      <Input placeholder="Enter Due Date" label="" type="date" />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name="due_date"
          //onChange={handleDateChange}
          format="MMMM DD, YYYY"
          sx={{
            width: '100%',
          }}
          value={date}
          onChange={setDate}
          slotProps={{
            textField: {
              style: {
                background: 'white',
                borderColor: 'white',
              },
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SVGIcon>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                          stroke="black"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M7 4V2.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17 4V2.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M2.5 9H21.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                          fill="black"
                        />
                        <path
                          d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                          fill="black"
                        />
                        <path
                          d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                          fill="black"
                        />
                        <path
                          d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                          fill="black"
                        />
                        <path
                          d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                          fill="black"
                        />
                        <path
                          d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                          fill="black"
                        />
                      </svg>
                    </SVGIcon>
                  </InputAdornment>
                ),
                sx: {
                  '& fieldset.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#EBEDF0',
                  },
                },
              },
            },
          }}
        />
      </LocalizationProvider> */}
    </div>
  )
}

export default DueDate
