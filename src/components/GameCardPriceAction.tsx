import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import PriceBox from "./PriceBox"

interface Props {
  gameId: number
  name: string
  price: number
}

const GameCardPriceAction = ({ gameId, name, price }: Props) => {
  const { t } = useTranslation()

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log("click")
  }
  return (
    <Box mt={3} display="flex" justifyContent="flex-end">
      <PriceBox price={price} />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleButtonClick}
        style={{ color: "inherit" }}
      >
        <Typography variant="button" fontWeight="bold">
          {t("homePage.gameCard.button")}
        </Typography>
      </Button>
    </Box>
  )
}

export default GameCardPriceAction
