import useScreenshots from "../hooks/useScreenshots"
import { Grid } from "@mui/material"

interface Props {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <Grid container spacing={2}>
      {data?.results.map((file) => (
        <Grid item lg={6} key={file.id}>
          <img src={file.image} width="100%" height="auto" />
        </Grid>
      ))}
    </Grid>
  )
}

export default GameScreenshots
