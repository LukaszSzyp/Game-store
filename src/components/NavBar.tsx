import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.webp"

import SearchInput from "./SearchInput"
import Basket from "./Basket"

const NavBar = () => {
  return (
    <>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">
          <img src={logo} height="60px" />
        </Link>
        <SearchInput />
        <Basket />
      </Box>
    </>
  )
}

export default NavBar
