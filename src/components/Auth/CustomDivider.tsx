import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import React from 'react'

export type CustomDividerProps = {
  label: string
}

const useStyles = makeStyles(() => ({
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0',
  },
  divider: {
    flexGrow: 1,
    height: '1px',
  },
}))

const CustomDivider: React.FC<CustomDividerProps> = ({
  label,
}: CustomDividerProps) => {
  const classes = useStyles()

  return (
    <div className={classes.dividerContainer}>
      <Divider className={classes.divider} />
      <Typography
        variant="body2"
        mx={4}
        fontWeight={400}
        fontSize={16}
        lineHeight={`20px`}
      >
        or {label} with
      </Typography>
      <Divider className={classes.divider} />
    </div>
  )
}
export default CustomDivider
