import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@mui/material/Tabs'
import { useTheme } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InvoiceTab from '@/components/Business/Statistics/InvoiceTab'
import EarningTab from '@/components/Business/Statistics/EarningTab'
import CustomerTab from '@/components/Business/Statistics/CustomerTab'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const Statistics: React.FC = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div className="p-5 pb-16">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '20px',
        }}
      >
        Statistics
      </Typography>
      <div className="mt-2">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="Statistics tabs"
          TabIndicatorProps={{
            style: {
              height: '33px',
              background: 'none',
              border: '1px solid #19191A',
              borderRadius: '45px',
              bottom: '7px',
            },
          }}
        >
          <Tab
            label="Invoices"
            sx={{
              padding: 0,
              textTransform: 'none',
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Earnings"
            sx={{
              padding: 0,
              textTransform: 'none',
            }}
            {...a11yProps(1)}
          />
          <Tab
            label="Customer"
            sx={{
              padding: 0,
              textTransform: 'none',
            }}
            {...a11yProps(2)}
          />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <InvoiceTab />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <EarningTab />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <CustomerTab />
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  )
}

export default Statistics
