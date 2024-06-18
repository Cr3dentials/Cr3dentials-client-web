import React from 'react'
import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

// import AvatarImg from '@/assets/images/Avatar.png'

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Avatar
        // src={AvatarImg}
        sx={{
          width: '32px',
          height: '32px',
        }}
      />
      {/* <IconButton
        sx={{
          color: '#19191A',
        }}
      >
        <NotificationsNoneIcon />
      </IconButton> */}
    </div>
  )
}

export default Topbar
