import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240

export const JournalStyles = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWitdh={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}