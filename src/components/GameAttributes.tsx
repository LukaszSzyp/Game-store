import { Grid, Typography } from "@mui/material"
import Game from "../entities/Game"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid container>
      <DefinitionItem therm="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Typography key={platform.id}>{platform.name}</Typography>
        ))}
      </DefinitionItem>
      <DefinitionItem therm="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem therm="Genres">
        {game.genres?.map((genre) => (
          <Typography key={genre.id}>{genre.name}</Typography>
        ))}
      </DefinitionItem>
      <DefinitionItem therm="Publishers">
        {game.publishers?.map((publisher) => (
          <Typography key={publisher.id}>{publisher.name}</Typography>
        ))}
      </DefinitionItem>
    </Grid>
  )
}

export default GameAttributes
