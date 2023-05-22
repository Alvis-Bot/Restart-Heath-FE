import logo from '../assets/Frame 7.png'
import { IconButton, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'phosphor-react'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'
import ButtonNext from '@/components/ButtonNext'
import useResponsive from "@/hooks/useResponsive";


export const Welcome = () => {
  const navigate = useNavigate()

  const isDesktop = useResponsive('up', 'sm')

  if (isDesktop) {
    return (
      <Stack
        direction='row'
        justifyContent={`center`}
        alignItems={`center`}
        sx={{
          flexWrap: isDesktop ? 'nowrap' : 'wrap'
        }}
      >
        Giao diện không được hổ trợ
      </Stack>
    )
  }

  return (
    <>
      <Stack width={`100%`} direction={`column`} spacing={5} m={5}>
        <img src={logo} alt='' width={`100%`} />
        <Typography variant={`h2`}>Welcome to your personal health tracker</Typography>
        <ButtonNext onClick={() => navigate('/app')} loading={false} disabled={false} />
      </Stack>
    </>
  )
}
export default Welcome
