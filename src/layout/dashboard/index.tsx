import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'

const Index = () => {
  return (
    <Stack
      direction='row'
      width={`100%`}
      height={`100vh`}

    >
      {/* <SideBar/> */}
      <Outlet />
    </Stack>
  )
}

export default Index
