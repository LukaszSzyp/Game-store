import Box from "@mui/material/Box"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      margin={2}
      sx={{
        ":hover": {
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        },
      }}
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
