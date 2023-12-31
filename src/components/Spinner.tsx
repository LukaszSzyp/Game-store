import { Box, CircularProgress } from "@mui/material"

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Spinner
