import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

interface Props {
  price: number
}

const PriceBox = ({ price }: Props) => {
  const { t } = useTranslation()
  return (
    <Box
      padding="10px"
      border="1px solid #555"
      borderRadius="5px"
      display="flex"
      gap={1}
      marginRight={2}
    >
      {price}
      <Typography fontSize="12px" fontWeight="bold">
        {t("common.currency")}
      </Typography>
    </Box>
  )
}

export default PriceBox
