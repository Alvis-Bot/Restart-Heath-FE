import { Navigate, useRoutes } from 'react-router-dom'
import Index from '../layout/dashboard'


import { Component, lazy, Suspense } from 'react'
import LoadingScreen from "@/components/LoadingScreen";
import {DEFAULT_PATH} from "@/config";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}
export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Index />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'welcome', element: <Welcome /> },
        { path: 'personal', element: <Personal /> },
        { path: "history/:id", element: <History /> },
        // { path: "chats", element: <Chats /> },
        // { path: "contact", element: <Contact /> },
        // { path: "profile", element: <Profile /> },
        //
        // {path: "call", element: <CallPage />},
        // { path: "404", element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' replace /> }
      ]
    },

    { path: '*', element: <Navigate to='/404' replace /> }
  ])
}

const GeneralApp = Loadable(lazy(() => import('../pages/GeneralApp')))
const Welcome = Loadable(lazy(() => import('../pages/WelCome')))
const Personal = Loadable(lazy(() => import('../pages/Personal')))
const History = Loadable(lazy(() => import('../pages/History')))
