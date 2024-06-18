import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import IconButton from '@mui/material/IconButton'
// import AddIcon from '@mui/icons-material/Add'
// import { useAppDispatch } from '@/store/hooks'
// import { setModalName } from '@/store/slices/modalSlice'
// import { NewInvoiceModalName } from '@/components/UI/Modal/NewInvoiceModal'
// import ModalWrapper from '@/components/UI/Modal/ModalWrapper'
// import { useAppSelector } from '@/store/hooks'
import HomeIcon from '@/assets/icons/homeIcon.svg'
import HomeActiveIcon from '@/assets/icons/homeActiveIcon.svg'
import StatisticIcon from '@/assets/icons/statisticIcon.svg'
import StatisticActiveIcon from '@/assets/icons/statisticActiveIcon.svg'
// import LendingIcon from '@/assets/icons/lendingIcon.svg'
import ReceiptsIcon from '@/assets/icons/receipts.svg'
import ReceiptsActiveIcon from '@/assets/icons/receipts_active.svg'
// import LendingActiveIcon from '@/assets/icons/lendingActiveIcon.svg'
import ProfileIcon from '@/assets/icons/profileIcon.svg'
import ProfileActiveIcon from '@/assets/icons/profileActiveIcon.svg'
//import { useCr3dUser } from '@/features/user/hooks'

const Footer: React.FC = () => {
  const { pathname } = useLocation()
  //const cr3dUser = useCr3dUser()
  // const dispatch = useAppDispatch()
  // const nav = [
  //   {
  //     path: '/home',
  //     defaultIcon: HomeIcon,
  //     active: HomeActiveIcon,
  //     label: 'Home',
  //   },
  // ]
  // const { modalName } = useAppSelector((state) => state.modalReducer)

  return (
    <div className="absolute bottom-0 flex justify-between items-baseline w-full p-3 bg-white border border-b-0 border-gray-100 mt-2">
      <Link
        to={`/home`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/home') ? 'text-primary-0' : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={pathname.includes('/home') ? HomeActiveIcon : HomeIcon}
          alt="footer home icon"
        />
        <span>Home</span>
      </Link>
      <Link
        to={`/invoices`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/invoices') ? 'text-primary-0' : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={
            pathname.includes('/invoices') ? ReceiptsActiveIcon : ReceiptsIcon
          }
          alt="footer invoices icon"
        />
        <span>Invoices</span>
      </Link>
      {/* <IconButton
        disableRipple
        sx={{
          marginTop: '-37px',
          width: '48px',
          height: '48px',
          background: '#4B56E3',
        }}
        //onClick={() => dispatch(setModalName(NewInvoiceModalName))}
      >
        <AddIcon
          sx={{
            color: 'white',
          }}
        />
      </IconButton> */}

      {/* <Link
        to={`/statistics`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/statistics') ? 'text-primary-0' : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={
            pathname.includes('/statistics')
              ? StatisticActiveIcon
              : StatisticIcon
          }
          alt="footer statistics icon"
        />
        <span>Statistics</span>
      </Link> */}

      {/* <Link
        to={`/home`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/lending') ? 'text-primary-0' : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={pathname.includes('/lending') ? LendingActiveIcon : LendingIcon}
          alt="footer lending icon"
        />
        <span>Lending</span>
      </Link> */}
      <Link
        to={`/profile`}
        className={`flex flex-col w-16 items-center justify-center ${
          pathname.includes('/profile') ? 'text-primary-0' : 'text-[#8F8F8F]'
        }`}
      >
        <img
          src={pathname.includes('/profile') ? ProfileActiveIcon : ProfileIcon}
          alt="footer profile icon"
        />
        <span>Profile</span>
      </Link>
      {/* {modalName !== '' && <ModalWrapper />} */}
    </div>
  )
}

export default Footer
