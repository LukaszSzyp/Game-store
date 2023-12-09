import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import GameHeading from "../components/GameHeading"
import GameGrid from "../components/GameGrid"

const HomePage = () => {
  return (
    <Grid container>
      <Grid xl={2}>Genres</Grid>
      <Grid xs={10}>
        <GameHeading />
        <Box display="flex" my={2}>
          <Box>platform selektor</Box>
          <Box>sort selector</Box>
        </Box>
        <Box>
          <GameGrid />
        </Box>
      </Grid>
    </Grid>
  )
}

export default HomePage
