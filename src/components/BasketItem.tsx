import { Box, Icon, IconButton, Typography } from "@mui/material"
import useGameItem from "../hooks/useGameItem"
import getCroppedImageUrl from "../services/image-url"
import useBasketStore from "../store/basketStore"
import PriceBox from "./PriceBox"

type Props = {
  gameId: number
  price: number
}

const BasketItem = ({ gameId, price }: Props) => {
  const { data: game } = useGameItem(gameId)
  const deleteItem = useBasketStore((s) => s.deleteItem)
  if (game)
    return (
      <Box
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" width="100%">
          <img
            src={getCroppedImageUrl(game.background_image)}
            width="auto"
            height="40px"
          />
          <Box
            width="100%"
            display="flex"
            ml={2}
            gap={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>{game.name}</Typography>
            <PriceBox price={price} />
          </Box>
        </Box>

        <IconButton
          sx={{ "&:hover": { color: "red" } }}
          onClick={() => deleteItem(gameId)}
        >
          <Icon>delete</Icon>
        </IconButton>
      </Box>
    )
}

export default BasketItem
