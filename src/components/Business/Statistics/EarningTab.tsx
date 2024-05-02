import React from 'react'
import Typography from '@mui/material/Typography'
import ReactApexChart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'

const EarningTab: React.FC = () => {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const series = [
    {
      name: 'Paid',
      type: 'column',
      data: [2600, 3700, 3500, 3000, 3800, 3100, 3600],
    },
    {
      name: '',
      type: 'column',
      data: [1400, 300, 1500, 1000, 200, 900, 400],
    },
  ]
  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      stacked: true,
      stackType: '100%',
    },
    colors: ['#4B56E3', '#EBEDF0'],
    labels,
    dataLabels: {
      enabled: false,
      enabledOnSeries: [0],
      background: {
        borderWidth: 0,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 6,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.75,
        },
      },
    },
    stroke: {
      width: 3,
    },
    tooltip: {
      followCursor: true,
      theme: '#4B56E3',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: '#767C8C',
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
        offsetX: -16,
        style: {
          colors: '#F5222D',
        },
      },
    },
  } as ApexOptions

  return (
    <>
      <div className="py-10 rounded-[8px] bg-[#4B56E3]">
        <Typography
          fontSize={`16px`}
          lineHeight={`20px`}
          textAlign={`center`}
          color={'white'}
        >
          Apr 16,2024
        </Typography>
        <Typography
          fontWeight={700}
          mt={`16px`}
          fontSize={`40px`}
          lineHeight={`40px`}
          textAlign={`center`}
          color={'white'}
        >
          $38,000
        </Typography>
      </div>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series}
          height={320}
        />
      </div>
    </>
  )
}

export default EarningTab
