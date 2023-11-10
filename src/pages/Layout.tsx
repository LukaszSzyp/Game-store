import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <Box p={1}>
      <NavBar />
      <Box p={5}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
