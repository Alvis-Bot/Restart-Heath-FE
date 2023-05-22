import { Box, Stack, styled, Typography } from '@mui/material'
import male from '@/assets/Group.png'
import feMale from '@/assets/businessman_man_business 1.png'
import React, { FC } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

const GenderItem = styled(Box)({
  position: 'relative',
  width: '90%',
  marginLeft: '5%',
  height: '132px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Check = styled(CheckCircleIcon)`
  position: absolute;
  transition: all 0.3s ease;
  right: 8px;
  top: 8px;
  font-size: 32px;
  width: 30px;
  color: black;
`

interface GenderInputProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
  check: boolean
  gender: GenderEnum
}
const GenderOption: FC<GenderInputProps> = ({ onClick, check, gender }) => {
  return (
    <Stack spacing={1} direction={`column`} width={`100%`} alignItems={`center`}>
      <GenderItem
        onClick={onClick}
        sx={{
          borderRadius: '20px',
          transition: 'all 0.3s ease',
          backgroundColor: check ? '#F0F2F4' : '#ffff',
          border: check ? 'none' : '2px solid #eeeeee'
        }}
      >
        <img src={gender === GenderEnum.MALE ? male : feMale} width={`33px`} height={`70px`} alt='' />
        {check && <Check />}
      </GenderItem>
      <Typography variant={`subtitle2`}>{gender === GenderEnum.MALE ? 'Male' : 'Female'}</Typography>
    </Stack>
  )
}

export default GenderOption
