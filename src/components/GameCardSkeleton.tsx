import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material"

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rounded" height={120} animation="wave" />
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Typography align="center" variant="h6">
            <Skeleton width={200} height={40} animation="wave" />
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
          my={1}
        >
          <Skeleton
            variant="rounded"
            height={15}
            width={100}
            animation="wave"
          />
          <Skeleton variant="rounded" height={20} width={20} animation="wave" />
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Box display="flex" justifyContent="space-between" width={250}>
            <Skeleton
              variant="rounded"
              height={50}
              width={80}
              animation="wave"
            />
            <Skeleton
              variant="rounded"
              height={50}
              width={150}
              animation="wave"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton
