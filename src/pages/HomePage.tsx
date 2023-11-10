import { Box, Grid } from "@mui/material"
import GameHeading from "../components/GameHeading"

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xl={2}>
        Genres
      </Grid>
      <Grid item xs={10}>
        <GameHeading />
        <Box display="flex" my={2}>
          <Box>platform selektor</Box>
          <Box>sort selector</Box>
        </Box>
        <Grid container>Game cards</Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
