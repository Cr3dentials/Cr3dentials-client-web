import React from 'react'
import ReactApexChart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { invoices } from '@/pages/Business/Home'
import type { InvoiceItemProps as InvoiceItemType } from '@/components/Invoices/InvoiceItem'
import InvoiceItem from '@/components/Invoices/InvoiceItem'

export type ItemType = {
  id: number
  amount: number
  status: string
  color: string
}

const items: Array<ItemType> = [
  {
    id: 1,
    amount: 3850.76,
    status: 'Overdue',
    color: '#F5222D',
  },
  {
    id: 2,
    amount: 3850.76,
    status: 'Paid Early',
    color: '#20C375',
  },
  {
    id: 3,
    amount: 3850.76,
    status: 'Paid',
    color: '#1FC095',
  },
  {
    id: 4,
    amount: 3850.76,
    status: 'Paid Late',
    color: '#1677FF',
  },
]

const InvoiceTab: React.FC = () => {
  const labels = ['Paid Late', 'Overdue', 'Paid Early', 'Paid']
  const series = [45, 15, 20, 20]
  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: true,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#1677FF', '#F5222D', '#1FC095', '#20C375'],
    labels,
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: true,
        donut: {
          size: '85%',
        },
      },
      bar: {
        borderRadius: 50,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    series,
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    type: 'pie',
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark',
    },
  } as ApexOptions
  return (
    <>
      <div className=" mt-5 border border-[#F5F5F8] rounded-[8px]">
        <div className="flex flex-col flex-auto w-full h-[250px] relative">
          <ReactApexChart
            className="flex items-center justify-center flex-auto w-full h-full"
            options={chartOptions}
            series={series}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
          />
          <div className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] top-1/2">
            <Typography
              fontSize={`27px`}
              lineHeight={`41px`}
              textAlign={`center`}
            >
              April
            </Typography>
            <Typography
              fontSize={`34px`}
              fontWeight={700}
              lineHeight={`34px`}
              textAlign={`center`}
              color={`#19191A`}
            >
              $16,000
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 text-center">
          {items.map((item: ItemType) => (
            <div key={item.id} className="mb-3">
              <Typography
                color={item.color}
                fontSize={`15px`}
                fontWeight={500}
                lineHeight={`20px`}
              >
                ${item.amount}
              </Typography>
              <Typography
                mt={1}
                fontSize={`12px`}
                fontWeight={400}
                lineHeight={`15px`}
              >
                {item.status}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            display: 'inline-block',
          }}
        >
          Completed Invoices
        </Typography>
        <Link
          to={`/business/home`}
          className="text-primary-0 text-[16px] leading-[20px] float-right mt-[3px]"
        >
          See All
        </Link>
        {invoices.map((invoice: InvoiceItemType) => (
          <InvoiceItem
            key={invoice.id}
            id={invoice.id}
            name={invoice.name}
            date={invoice.date}
            amount={invoice.amount}
            status={invoice.status}
          />
        ))}
      </div>
    </>
  )
}

export default InvoiceTab
