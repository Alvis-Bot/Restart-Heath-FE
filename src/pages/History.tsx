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
  ToggleButtonGroup,
  ListItem,
  ListItemButton,
  List,
  ListItemIcon, ListItemText, Divider
} from '@mui/material'
import { AccessAlarm, CheckBox, CheckCircleOutline, Facebook, FemaleSharp, Twitter } from '@mui/icons-material'
import logo from '../assets/Frame 7.png'
import ManIcon from '@mui/icons-material/Man'
import React, {useEffect, useState} from 'react'
import { ToggleButton } from '@mui/lab'
import WomanIcon from '@mui/icons-material/Woman'
import feMale from '../assets/businessman_man_business 1.png'
import male from '../assets/Group.png'
import {Barbell, CircleDashed} from 'phosphor-react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import InfoForm from '@/components/dashboard/InfoForm'
import useResponsive from "@/hooks/useResponsive";
import {StarIcon} from "@heroicons/react/20/solid";
import axios from "axios";
import {GenderEnum} from "@/components/custom/GenderOption";


interface IData {
  fullName: string
  mssv: string
  class: string
  gender : GenderEnum,
  weight: number
  height: number
  createdAt: string
  updatedAt: string
}

//2023-05-22T10:34:40.704Z -> 2023-05-22 10:34:40

const formatTime = (time: string) => {
  const date = new Date(time)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
const History = () => {
  const isDesktop = useResponsive('up', 'sm')

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    axios.get<IData[]>('http://103.186.65.172:3005/history' ,{
      params: {
        mssv : '120000903'
      }
    })
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  if (isDesktop) {
    return (
      <Stack
        direction='row'
        width={`100%`}
        height={`100vh`}
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
    <Stack p={4} maxWidth='600px' width={`100%`} height={`100%`} spacing={3}>
      <Typography variant={`h2`}>Lịch sử</Typography>
      <Stack  sx={{cursor: 'pointer' , overflowY : 'scroll'}} spacing={2}>
        {
          data && data.map((item, index) => (
            <Stack
              width={`100%`}
              sx={{
                backgroundColor: 'rgba(120,79,182,0.1)',
                borderRadius: '10px',
                '& > *': {
                  color: '#7042C9'
                }
              }} alignItems={'start'}  direction="column" spacing={0.5} p={2}>
              <Stack  direction={`row`} justifyContent={`space-between`} width={`100%`} >
                <Stack direction={`row`} spacing={2}>
                  <Typography variant={`subtitle2`}>Cân nặng</Typography>
                  <Typography variant={`subtitle2`}>{item.weight}</Typography>
                </Stack>
                <Stack direction={`row`} spacing={2}>
                  <Typography variant={`subtitle2`}>Chiều cao</Typography>
                  <Typography variant={`subtitle2`}>{item.height}</Typography>
                </Stack>
              </Stack>
              <Typography pt={2} variant={`caption`}>{formatTime(item.createdAt)}</Typography>
              {/*<Divider sx={{*/}
              {/*  width: '100%',*/}
              {/*}} />*/}
            </Stack>
          ))
        }


      </Stack>

    </Stack>
  )
}

export default History

