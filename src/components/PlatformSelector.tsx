import React from "react"
import { Button, Icon, Menu, MenuItem } from "@mui/material"

import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"
import useGamesQueryStore from "../store/gameStore"
import { useTranslation } from "react-i18next"

const PlatformSelector = () => {
  const { t } = useTranslation()
  const selectedPlatformId = useGamesQueryStore((s) => s.gameQuery.platformId)
  const setSelectedPlatformId = useGamesQueryStore((s) => s.setPlatformId)

  const { data, error } = usePlatforms()
  const selectedPlatform = usePlatform(selectedPlatformId)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (error) return null

  return (
    <>
      <Button
        id="basic-button"
        onClick={handleClick}
        endIcon={<Icon>{open ? "expand_more_icon" : "expand_less_icon"}</Icon>}
        sx={{ minWidth: "80px" }}
      >
        {selectedPlatform
          ? selectedPlatform.name
          : t("homePage.platformsSelector.title")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatformId(platform.id)
              handleClose()
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default PlatformSelector
