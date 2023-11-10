import { Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

const GameHeading = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      {t("homePage.header.appTitle")}
    </Typography>
  )
}

export default GameHeading
