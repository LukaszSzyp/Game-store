import { Box, Typography } from "@mui/material"

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : ""

  return (
    <Box sx={{ color: color }} borderRadius="4px" px={1} bgcolor={"#333D"}>
      <Typography fontWeight={700}>{score}</Typography>
    </Box>
  )
}

export default CriticScore
