import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material"
import Game from "../entities/Game"
import getCroppedImageUrl from "../services/image-url"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={getCroppedImageUrl(game.background_image)}
      />
      <CardContent>
        <Link
          href={`/games/${game.slug}`}
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          <Typography align="center" variant="h6">
            {game.name}
          </Typography>
        </Link>
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
      </CardContent>
    </Card>
  )
}

export default GameCard
