import { Box, Stack, styled, Typography } from '@mui/material'
import male from '@/assets/Group.png'
import feMale from '@/assets/businessman_man_business 1.png'
import React, { FC } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

const GenderItem = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '132px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Check = styled(CheckCircleIcon)`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 32px;
  width: 30px;
  color: black;
`

interface GenderInputProps {
  handleChange: any
  gender: Gender
}
export const GenderInput: FC<GenderInputProps> = ({ handleChange, gender }) => {
  return (
    <Stack direction={`row`} width={`100%`} justifyContent={`center`} alignItems={`center`}>
      {/*<Stack*/}
      {/*  spacing={3}*/}
      {/*  py={4}*/}
      {/*  width={`100%`}*/}
      {/*  height={`100%`}*/}
      {/*  direction={`row`}*/}
      {/*  justifyContent={`space-between`}*/}
      {/*  alignItems={`center`}*/}
      {/*>*/}
      <Stack spacing={2} direction={`column`} width={`100%`} alignItems={`center`}>
        <GenderItem
          onClick={() => handleChange(Gender.MALE)}
          sx={{
            backgroundColor: gender == Gender.MALE ? '#F0F2F4' : '#ffff',
            border: gender == Gender.MALE ? 'none' : '2px solid #eeeeee'
          }}
        >
          <img src={male} width={`23px`} height={`70px`} alt='' />
          {gender == Gender.MALE && <Check />}
        </GenderItem>
        <Typography variant={`caption`}>Male</Typography>
      </Stack>
      <Stack
        spacing={1}
        direction={`column`}
        width={`100%`}
        height={`100%`}
        justifyContent={`space-between`}
        alignItems={`center`}
      >
        <GenderItem
          onClick={() => handleChange(Gender.FEMALE)}
          sx={{
            backgroundColor: gender == Gender.FEMALE ? '#F0F2F4' : '#ffff',
            border: gender == Gender.FEMALE ? 'none' : '2px solid #eeeeee'
          }}
        >
          <img src={feMale} width={`30px`} height={`70px`} alt='' />
          {gender === Gender.FEMALE && <Check />}
        </GenderItem>
        <Typography variant={`caption`}>Female</Typography>
      </Stack>
      {/*</Stack>*/}
    </Stack>
  )
}

export default GenderInput
