import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.webp"
import MUISwitch from "./MUISwitch"

import SearchInput from "./SearchInput"
import { useColorMode } from "../context/ColorModeContext"

const NavBar = () => {
  const { mode, toggleColorMode } = useColorMode()
  return (
    <>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">
          <img src={logo} height="60px" />
        </Link>
        <SearchInput />
        <MUISwitch
          sx={{ mr: 1 }}
          checked={mode == "dark" ? true : false}
          onChange={() => toggleColorMode()}
        />
      </Box>
    </>
  )
}

export default NavBar
