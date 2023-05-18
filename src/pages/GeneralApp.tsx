import {
  Stack,
  Grid,
  styled,
  Paper,
  Container,
  Typography,
  TextField,
  Box,
  Button,
  FormLabel,
  FormControl,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  ToggleButtonGroup
} from '@mui/material'
import { AccessAlarm, CheckBox, CheckCircleOutline, Facebook, FemaleSharp, Twitter } from '@mui/icons-material'
import useResponsive from '~/hooks/useResponsive'
import logo from '../assets/Frame 7.png'
import InfoForm from '~/components/dashboard/InfoForm'
import ManIcon from '@mui/icons-material/Man'
import React, { useState } from 'react'
import { ToggleButton } from '@mui/lab'
import WomanIcon from '@mui/icons-material/Woman'
import feMale from '../assets/businessman_man_business 1.png'
import male from '../assets/Group.png'
import { CircleDashed } from 'phosphor-react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'



const GeneralApp = () => {
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
    <Stack p={4} maxWidth='600px' width={`100%`} height={`100%`}>
      <Typography variant={`h2`}>Give us some basic information</Typography>

      <InfoForm/>
    </Stack>
  )
}

export default GeneralApp
