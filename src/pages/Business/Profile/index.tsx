import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import SettingPanel from '@/components/Business/Profile/SettingPanel'

import AvatarImg from '@/assets/images/Avatar.png'
import AboutPanel from '@/components/Business/Profile/AboutPanel'
import { useLogout, usePrivy } from '@privy-io/react-auth'
import { useCr3dUser } from '@/features/user/hooks'
//import { useNavigate } from 'react-router-dom'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const Profile: React.FC = () => {
  const [logingOut, setLogingOut] = useState(false)
  const { user } = usePrivy()
  const cr3dUser = useCr3dUser()
  const isVendor = cr3dUser.role === 'vendor'
  const { logout } = useLogout({
    onSuccess() {
      window.location.pathname = '/'
    },
  })
  return (
    <div>
      <div className="p-5 pb-16 ">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '20px',
          }}
        >
          Profile
        </Typography>
        <div className="relative flex justify-center mt-8">
          <Avatar
            //src={AvatarImg}
            alt="Avatar image"
            sx={{
              width: '110px',
              height: '110px',
            }}
          ></Avatar>
          <IconButton
            className="absolute bottom-0 left-[calc(50%+20px)] z-5 border-solid border-[1px] border-[#F0F1F5]"
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={{
              background: 'white',
              padding: '8px',
            }}
          >
            <SvgIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.70178C2 6.20963 3.20963 5 4.70178 5C5.47706 5 6.16537 4.5039 6.41053 3.7684L6.5 3.5C6.54219 3.37343 6.56329 3.31014 6.58586 3.254C6.87405 2.53712 7.54939 2.05037 8.32061 2.00366C8.38101 2 8.44772 2 8.58114 2H15.4189C15.5523 2 15.619 2 15.6794 2.00366C16.4506 2.05037 17.126 2.53712 17.4141 3.254C17.4367 3.31014 17.4578 3.37343 17.5 3.5L17.5895 3.7684C17.8346 4.5039 18.5229 5 19.2982 5C20.7904 5 22 6.20963 22 7.70178V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7.70178Z"
                  stroke="#4B56E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                  stroke="#4B56E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SvgIcon>
            <VisuallyHiddenInput type="file" />
          </IconButton>
        </div>
        <div className="mt-3">
          <Typography
            fontWeight={700}
            fontSize={`16px`}
            lineHeight={`20px`}
            textAlign={`center`}
          >
            {user?.id}
          </Typography>
        </div>
        {isVendor && (
          <div className="mt-5">
            <Button
              variant="contained"
              disabled={logingOut}
              fullWidth
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              onClick={() => {
                setLogingOut(true)
                logout()
              }}
              startIcon={
                <SvgIcon
                  sx={{
                    width: '48px',
                    height: '48px',
                    marginRight: '20px',
                  }}
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="24" fill="#4B56E3" />
                    <path
                      d="M10.6667 26.6667C10.6667 26.6667 10.8285 27.799 15.5148 32.4853C20.2011 37.1716 27.7991 37.1716 32.4854 32.4853C34.1457 30.8249 35.2178 28.799 35.7016 26.6667M10.6667 26.6667V34.6667M10.6667 26.6667H18.6667M37.3334 21.3333C37.3334 21.3333 37.1717 20.201 32.4854 15.5147C27.7991 10.8284 20.2011 10.8284 15.5148 15.5147C13.8544 17.1751 12.7823 19.201 12.2985 21.3333M37.3334 21.3333V13.3333M37.3334 21.3333H29.3334"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SvgIcon>
              }
              sx={{
                background: '#EDEEFC !important',
                color: 'black',
                padding: '16px',
                fontWeight: 500,
                fontSize: '16px',
                textAlign: 'center',
                lineHeight: '20px',
                borderRadius: '8px',
              }}
            >
              Switch to Customer account
            </Button>
          </div>
        )}

        <div className="mt-5">
          <SettingPanel />
        </div>
        <div className="mt-5">
          <AboutPanel />
        </div>
        <div className="mt-5">
          <Button
            variant="contained"
            onClick={() => {
              setLogingOut(true)
              logout()
            }}
            fullWidth
            disabled={logingOut}
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            startIcon={
              <SvgIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  marginRight: '8px',
                }}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8333 14.1667L18 10M18 10L13.8333 5.83333M18 10H8M10.5 14.1667C10.5 14.9416 10.5 15.3291 10.4148 15.647C10.1836 16.5098 9.50978 17.1836 8.64705 17.4148C8.32913 17.5 7.94164 17.5 7.16667 17.5H6.75C5.58515 17.5 5.00272 17.5 4.54329 17.3097C3.93072 17.056 3.44404 16.5693 3.1903 15.9567C3 15.4973 3 14.9149 3 13.75V6.25C3 5.08515 3 4.50272 3.1903 4.04329C3.44404 3.43072 3.93072 2.94404 4.54329 2.6903C5.00272 2.5 5.58515 2.5 6.75 2.5H7.16667C7.94164 2.5 8.32913 2.5 8.64705 2.58519C9.50978 2.81635 10.1836 3.49022 10.4148 4.35295C10.5 4.67087 10.5 5.05836 10.5 5.83333"
                    stroke="#4B56E3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SvgIcon>
            }
            sx={{
              background: '#F0F1F5 !important',
              color: 'black',
              padding: '16px',
              fontWeight: 500,
              fontSize: '16px',
              textAlign: 'center',
              lineHeight: '20px',
              borderRadius: '8px',
            }}
          >
            {logingOut ? 'Please wait...' : 'Logout'}
          </Button>
        </div>
        <div
          style={{
            height: '16px',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Profile
