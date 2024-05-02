import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { useAppDispatch } from '@/store/hooks'
import { setModalName } from '@/store/slices/modalSlice'
import { NewInvoiceModalName } from '@/components/UI/Modal/NewInvoiceModal'
import ModalWrapper from '@/components/UI/Modal/ModalWrapper'
import { useAppSelector } from '@/store/hooks'

import HomeIcon from '@/assets/icons/homeIcon.svg'
import HomeActiveIcon from '@/assets/icons/homeActiveIcon.svg'
import StatisticIcon from '@/assets/icons/statisticIcon.svg'
import StatisticActiveIcon from '@/assets/icons/statisticActiveIcon.svg'
import LendingIcon from '@/assets/icons/lendingIcon.svg'
import LendingActiveIcon from '@/assets/icons/lendingActiveIcon.svg'
import ProfileIcon from '@/assets/icons/profileIcon.svg'
import ProfileActiveIcon from '@/assets/icons/profileActiveIcon.svg'

const Footer: React.FC = () => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { modalName } = useAppSelector((state) => state.modalReducer)

  return (
    <div className="sticky bottom-0 flex justify-between w-full p-3 bg-white border border-b-0 border-gray-100">
      <Link
        to={`/business/home`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/business/home')
            ? 'text-primary-0'
            : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={pathname.includes('/business/home') ? HomeActiveIcon : HomeIcon}
          alt="footer home icon"
        />
        <span>Home</span>
      </Link>
      <Link
        to={`/business/statistics`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/business/statistics')
            ? 'text-primary-0'
            : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={
            pathname.includes('/business/statistics')
              ? StatisticActiveIcon
              : StatisticIcon
          }
          alt="footer statistics icon"
        />
        <span>Statistics</span>
      </Link>
      <IconButton
        disableRipple
        sx={{
          marginTop: '-37px',
          width: '48px',
          height: '48px',
          background: '#4B56E3',
        }}
        onClick={() => dispatch(setModalName(NewInvoiceModalName))}
      >
        <AddIcon
          sx={{
            color: 'white',
          }}
        />
      </IconButton>
      <Link
        to={`/business/home`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/business/lending')
            ? 'text-primary-0'
            : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={
            pathname.includes('/business/lending')
              ? LendingActiveIcon
              : LendingIcon
          }
          alt="footer lending icon"
        />
        <span>Lending</span>
      </Link>
      <Link
        to={`/business/profile`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/business/profile')
            ? 'text-primary-0'
            : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={
            pathname.includes('/business/profile')
              ? ProfileActiveIcon
              : ProfileIcon
          }
          alt="footer profile icon"
        />
        <span>Profile</span>
      </Link>

      {modalName !== '' && <ModalWrapper />}
    </div>
  )
}

export default Footer
