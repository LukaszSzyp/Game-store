import React from "react"
import { Button, Icon, Menu, MenuItem } from "@mui/material"
import { useTranslation } from "react-i18next"

import useGamesQueryStore from "../store"

const SortSelector = () => {
  const { t } = useTranslation()
  const sortOrders = [
    { value: "", label: t("homePage.sortSelector.options.relevance") },
    { value: "-added", label: t("homePage.sortSelector.options.dateAdded") },
    { value: "name", label: t("homePage.sortSelector.options.name") },
    {
      value: "-released",
      label: t("homePage.sortSelector.options.releaseDate"),
    },
    {
      value: "-metacritic",
      label: t("homePage.sortSelector.options.popularity"),
    },
    {
      value: "-rating",
      label: t("homePage.sortSelector.options.averageRating"),
    },
  ]
  const SortOrder = useGamesQueryStore((s) => s.gameQuery.sortOrder)
  const setSortOrder = useGamesQueryStore((s) => s.setSortOrder)

  const currentSortOrder = sortOrders.find((order) => order.value === SortOrder)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="basic-button"
        onClick={handleClick}
        endIcon={<Icon>{open ? "expand_more_icon" : "expand_less_icon"}</Icon>}
        sx={{ minWidth: "80px" }}
      >
        {`${t("homePage.sortSelector.title")}: ${
          currentSortOrder?.label || "Relevance"
        }`}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              setSortOrder(order.value)
              handleClose()
            }}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default SortSelector
