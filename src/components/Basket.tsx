import React from "react"
import {
  Badge,
  BadgeProps,
  Box,
  Divider,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import useBasketStore from "../store/basketStore"
import BasketItem from "./BasketItem"
import PriceBox from "./PriceBox"

const Basket = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const basketItems = useBasketStore((s) => s.basket)
  const countBasket = basketItems
    .map((item) => item.price)
    .reduce((acc, price) => acc + price, 0)

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 20,
      border: `2px solid #000`,
      padding: "0 4px",
    },
  }))
  return (
    <>
      <IconButton id="open-basket" onClick={handleClick} sx={{ mx: "15px" }}>
        <StyledBadge badgeContent={basketItems.length} color="primary">
          <Icon>shopping_basket_icon</Icon>
        </StyledBadge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {basketItems.length === 0 && (
          <MenuItem disabled>{t("basket.noItems")}</MenuItem>
        )}
        {basketItems.map((item) => (
          <BasketItem
            key={item.gameId}
            gameId={item.gameId}
            price={item.price}
          />
        ))}
        {basketItems.length > 0 && (
          <>
            <Divider />
            <MenuItem disabled>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                width="100%"
                pr={4}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography>{t("basket.basketCounter")}</Typography>
                  <PriceBox price={countBasket} />
                </Box>
              </Box>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  )
}

export default Basket
