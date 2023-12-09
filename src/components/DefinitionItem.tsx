import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"

interface Props {
  therm: string
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ therm, children }: Props) => {
  return (
    <Box
      marginY={5}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mx={1}
      gap={1}
    >
      <Typography fontSize="md" color="gray.600">
        {therm}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        padding={1}
      >
        {children}
      </Box>
    </Box>
  )
}

export default DefinitionItem
