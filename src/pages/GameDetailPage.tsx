import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Box, Grid, Typography } from "@mui/material"

import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import GameTrailer from "../components/GameTrailer"
import GameScreenshots from "../components/GameScreenshots"
import Spinner from "../components/Spinner"
import GameCardPriceAction from "../components/GameCardPriceAction"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <Grid container>
      <Grid item xl={6}>
        <Typography variant="h3">{game.name}</Typography>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
        <Box mr={3}>
          <GameCardPriceAction
            gameId={game.id}
            name={game.name}
            price={game.rating_top}
          />
        </Box>
      </Grid>

      <Grid item xl={6}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Grid>
    </Grid>
  )
}

export default GameDetailPage
