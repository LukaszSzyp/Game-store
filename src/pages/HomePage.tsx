import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import GameHeading from "../components/GameHeading"
import GameGrid from "../components/GameGrid"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
  return (
    <Grid container>
      <Grid xl={1.5}>
        <GenreList />
      </Grid>
      <Grid xs={10}>
        <GameHeading />
        <Box display="flex" my={2}>
          <Box>
            <PlatformSelector />
          </Box>
          <Box>
            <SortSelector />
          </Box>
        </Box>
        <Box>
          <GameGrid />
        </Box>
      </Grid>
    </Grid>
  )
}

export default HomePage
