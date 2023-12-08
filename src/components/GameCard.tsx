import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material"
import getCroppedImageUrl from "../services/image-url"

import Game from "../entities/Game"
import GameCardPriceAction from "./GameCardPriceAction"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link
        href={`/games/${game.slug}`}
        color="inherit"
        sx={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image={getCroppedImageUrl(game.background_image)}
        />
        <CardContent>
          <Typography align="center" variant="h6">
            {game.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Box>
          <GameCardPriceAction
            gameId={game.id}
            name={game.name}
            price={game.rating_top}
          />
        </CardContent>
      </Link>
    </Card>
  )
}

export default GameCard
