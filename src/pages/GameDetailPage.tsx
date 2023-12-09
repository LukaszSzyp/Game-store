import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { CircularProgress, Grid, Typography } from "@mui/material"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import GameTrailer from "../components/GameTrailer"
import GameScreenshots from "../components/GameScreenshots"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <CircularProgress />

  if (error || !game) throw error

  return (
    <Grid container>
      <Grid item xl={6}>
        <Typography variant="h3">{game.name}</Typography>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Grid>

      <Grid item xl={6}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Grid>
    </Grid>
  )
}

export default GameDetailPage
