import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

export type FilterButtonProps = {
  id: number
  icon: any
  title: string
  link: string
}

const FilterButton: React.FC<FilterButtonProps> = ({
  icon,
  title,
  link,
}: FilterButtonProps) => {
  return (
    <Link to={link}>
      <div className="w-20 rounded-[100px] bg-primary-0 p-3 flex justify-center items-center">
        <img
          className="rounded-[100px] bg-primary-0 w-8 block"
          src={icon}
          alt={`${title} filter icon`}
        />
      </div>

      <Typography
        variant="body2"
        sx={{
          marginTop: '10px',
          fontSize: '16px',
          lineHeight: '20px',
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Link>
  )
}

export default FilterButton
