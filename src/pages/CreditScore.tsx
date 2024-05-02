import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Button from '@/components/UI/Button'
import CreditItem from '@/components/CreditScore/CreditItem'
import ScoreChartImg from '@/assets/images/ScoreChart.png'
import SpinImg from '@/assets/images/Spin.png'
import SpinCircleImg from '@/assets/images/SpinCircle.png'

export type CreditItemType = {
  id: number
  title: string
  content: string
  percent: number
  status: string
}

const credits = [
  {
    id: 1,
    title: 'Proof of Income',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    percent: 90,
    status: 'Good',
  },
  {
    id: 2,
    title: 'Payment of Utilities & Bills',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    percent: 90,
    status: 'Good',
  },
  {
    id: 3,
    title: 'Spending Patterns',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    percent: 90,
    status: 'Good',
  },
  {
    id: 4,
    title: 'Loan/Credit Repayments',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    percent: 90,
    status: 'Good',
  },
  {
    id: 5,
    title: 'Cash Flow Analysis',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    percent: 90,
    status: 'Good',
  },
]

const CreditScore: React.FC = () => {
  const [viewScore, setViewScore] = useState<boolean>(false)
  const [deg, setDeg] = useState<number>(0)

  useEffect(() => {
    if (viewScore) {
      setInterval(() => {
        setDeg((prevDeg) => prevDeg + 45)
      }, 1000)
    }
  }, [viewScore, deg])

  return (
    <>
      <Link to="/credit-score" className="block float-left">
        <ArrowBackIosNewIcon />
      </Link>
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
        Credit Score
      </Typography>
      <div className="bg-gray-100 rounded-[8px] rounded-b-none pt-4 px-2 mt-16 flex items-center justify-center relative">
        <img src={ScoreChartImg} alt="score chart image" />
        <img
          src={SpinCircleImg}
          className="absolute z-50 bottom-3"
          alt="spin circle image"
        />
        <img
          src={SpinImg}
          className={`absolute bottom-[17px]`}
          style={{
            transform: `rotate(${deg}deg)`,
          }}
          alt="Spin arrow image"
        />
      </div>
      {!viewScore ? (
        <div className="flex flex-col items-center mt-10">
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '22px',
              lineHeight: '36px',
            }}
          >
            Your Credit Profile
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              textAlign: 'center',
            }}
          >
            Understand Your Creditworthiness with Comprehensive Metrics
          </Typography>
          <Button
            label="View Credit Score"
            className="mt-10"
            onClick={() => setViewScore(true)}
          />
        </div>
      ) : (
        credits.map((credit: CreditItemType) => (
          <CreditItem
            key={credit.id}
            id={credit.id}
            title={credit.title}
            content={credit.content}
            status={credit.status}
            percent={credit.percent}
          />
        ))
      )}
    </>
  )
}

export default CreditScore
