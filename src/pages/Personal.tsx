import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography
} from '@mui/material'
import {ArrowLeft, Barbell, ClockCounterClockwise, Heartbeat, SignOut} from 'phosphor-react'
import Alert from '@mui/lab/Alert'
import React, {useCallback, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSocket} from "@/hooks/useSocket";
import {GenderEnum} from "@/components/custom/GenderOption";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: `100%`,
  textAlign: 'center',
  height: `120px`,
  borderRadius: `20px`,
  color: theme.palette.text.secondary
}))

interface IData {
  fullName: string
  mssv: string
  class: string
  gender : GenderEnum,
  weight: number
  height: number
}
export const Personal = () => {
  const socket = useSocket()
  const [data, setData] = React.useState<IData>()
  useEffect(() => {
    console.log('socket');
    socket.addEventListener('message', (ev) => {
      console.log('message' ,JSON.parse(ev.data));
      setData(JSON.parse(ev.data))
    })
  }, [socket ,data]);

  const navigate = useNavigate()
  const [value, setValue] = React.useState(0)
  const mssv = localStorage.getItem('mssv')

  return (
    <>
      <Stack height={`100%`} width={`100%`} p={4} spacing={4}>
        <Stack width={`100%`} direction={`row`} justifyContent={`space-between`} alignItems={`center`} spacing={6}>
          <IconButton onClick={() => navigate('/app')}>
            <ArrowLeft size={32} weight='regular' />
          </IconButton>
          <IconButton>{/*<SignOut size={32} weight='regular' />*/}</IconButton>
        </Stack>
        {/*Body*/}
        <Stack mt={4} pl={1} width={`100%`} justifyContent={`flex-start`} alignItems={`start`} spacing={1}>
          <Typography variant={`h2`} fontWeight={`inherit`}>
            Xin chào,
          </Typography>
          <Typography variant={`h1`}>
            {data ? data?.fullName : '...'}
          </Typography>
        </Stack>

        <Stack mt={4} pl={1} width={`100%`} justifyContent={`flex-start`} alignItems={`start`} spacing={1}>
          <Alert
            sx={{
              width: `100%`,
              border: 'none',
              padding: `0px`,
              display: `flex`,
              justifyContent: `flex-start`,
              alignItems: `center`
            }}
            variant='outlined'
            severity='warning'
          >
            You haven’t checked out the app recently. Do some workouts.
          </Alert>
        </Stack>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(177,102,102,0.1)',
                  // tất cả item con
                  '& > *': {
                    color: '#D2416E'
                  }
                }}
              >
                <Stack direction={`column`} width={`100%`} alignItems={`center`} spacing={1} p={1}>
                  <Stack direction={`row`} width={`100%`} alignItems={`center`} spacing={1}>
                    <Barbell size={16} weight='regular' />
                    <Typography variant={`h6`} fontWeight={`inherit`}>
                      Cân nặng
                    </Typography>
                  </Stack>

                  <Stack
                    direction={`row`}
                    alignItems={`flex-end`}
                    width={`100%`}
                    spacing={0.2}
                    justifyContent={`flex-start`}
                  >
                    <Typography variant={`h2`} fontWeight={`inherit`}>
                      {data ? data?.weight : 0}
                    </Typography>
                    <Typography variant={`h6`} pb={0.5} fontWeight={`inherit`}>
                      kg
                    </Typography>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(120,79,182,0.1)',
                  // tất cả item con
                  '& > *': {
                    color: '#7042C9'
                  }
                }}
              >
                <Stack direction={`column`} width={`100%`} alignItems={`center`} spacing={1} p={1}>
                  <Stack direction={`row`} width={`100%`} alignItems={`center`} spacing={1}>
                    <Barbell size={16} weight='regular' />
                    <Typography variant={`h6`} fontWeight={`inherit`}>
                      Chiều cao
                    </Typography>
                  </Stack>

                  <Stack
                    direction={`row`}
                    alignItems={`flex-end`}
                    width={`100%`}
                    spacing={0.2}
                    justifyContent={`flex-start`}
                  >
                    <Typography variant={`h2`} fontWeight={`inherit`}>
                      {data ? data?.height : 0}
                    </Typography>
                    <Typography variant={`h6`} pb={0.5} fontWeight={`inherit`}>
                      m
                    </Typography>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            {/*<Grid item xs={6}>*/}
            {/*  <Item*/}
            {/*    elevation={0}*/}
            {/*    sx={{*/}
            {/*      backgroundColor: 'rgba(94,204,188,0.1)',*/}
            {/*      // tất cả item con*/}
            {/*      '& > *': {*/}
            {/*        color: '#0DB1AD'*/}
            {/*      }*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <Stack direction={`column`} width={`100%`} alignItems={`center`} spacing={1} p={1}>*/}
            {/*      <Stack direction={`row`} width={`100%`} alignItems={`center`} spacing={1}>*/}
            {/*        <Barbell size={16} weight='regular' />*/}
            {/*        <Typography variant={`h6`} fontWeight={`inherit`}>*/}
            {/*          Heart Rate*/}
            {/*        </Typography>*/}
            {/*      </Stack>*/}

            {/*      <Stack*/}
            {/*        direction={`row`}*/}
            {/*        alignItems={`flex-end`}*/}
            {/*        width={`100%`}*/}
            {/*        spacing={0.2}*/}
            {/*        justifyContent={`flex-start`}*/}
            {/*      >*/}
            {/*        <Typography variant={`h1`} fontWeight={`inherit`}>*/}
            {/*          78*/}
            {/*        </Typography>*/}
            {/*        <Typography variant={`h6`} pb={0.5} fontWeight={`inherit`}>*/}
            {/*          bpm*/}
            {/*        </Typography>*/}
            {/*      </Stack>*/}
            {/*    </Stack>*/}
            {/*  </Item>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={6}>*/}
            {/*  <Item*/}
            {/*    elevation={0}*/}
            {/*    sx={{*/}
            {/*      backgroundColor: 'rgba(93,115,187,0.1)',*/}
            {/*      // tất cả item con*/}
            {/*      '& > *': {*/}
            {/*        color: '#197BD2'*/}
            {/*      }*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <Stack direction={`column`} width={`100%`} alignItems={`center`} spacing={1} p={1}>*/}
            {/*      <Stack direction={`row`} width={`100%`} alignItems={`center`} spacing={1}>*/}
            {/*        <Barbell size={16} weight='regular' />*/}
            {/*        <Typography variant={`h6`} fontWeight={`inherit`}>*/}
            {/*          Heart Rate*/}
            {/*        </Typography>*/}
            {/*      </Stack>*/}

            {/*      <Stack*/}
            {/*        direction={`row`}*/}
            {/*        alignItems={`flex-end`}*/}
            {/*        width={`100%`}*/}
            {/*        spacing={0.2}*/}
            {/*        justifyContent={`flex-start`}*/}
            {/*      >*/}
            {/*        <Typography variant={`h1`} fontWeight={`inherit`}>*/}
            {/*          78*/}
            {/*        </Typography>*/}
            {/*        <Typography variant={`h6`} pb={0.5} fontWeight={`inherit`}>*/}
            {/*          bpm*/}
            {/*        </Typography>*/}
            {/*      </Stack>*/}
            {/*    </Stack>*/}
            {/*  </Item>*/}
            {/*</Grid>*/}
          </Grid>
        </Box>

        <BottomNavigation
          sx={{
            backgroundColor: 'inherit'
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            onClick={() => {
              navigate('/personal')
            }}
            label='Chi tiết' icon={<Heartbeat size={32} weight="bold" />} />
          <BottomNavigationAction
            onClick={() => {
              navigate(`/history/${mssv}`)
            }}
            label='Lịch sử' icon={<ClockCounterClockwise size={32} weight="bold" />} />
        </BottomNavigation>
      </Stack>
    </>
  )
}

export default Personal
