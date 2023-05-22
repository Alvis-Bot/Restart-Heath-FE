import React from 'react'
import {ThemeProvider} from "@/theme";
import Router from "@/router";
import {SocketProvider} from "@/context/SocketContext";



function App() {
  return (
    <SocketProvider>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
    </SocketProvider>
  )
}

export default App
