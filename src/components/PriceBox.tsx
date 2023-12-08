import { Box, Typography } from "@mui/material"

interface Props {
  price: number
}

const PriceBox = ({ price }: Props) => {
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
        zł
      </Typography>
    </Box>
  )
}

export default PriceBox
