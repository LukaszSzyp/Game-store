import { Box, Grid, Typography } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCardContainer from "./GameCardContainer"
import GameCard from "./GameCard"

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames()

  if (error) return <Typography>{error.message}</Typography>

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage} //!!hasNextPage
      next={() => fetchNextPage()}
      loader={<CircularProgress />}
      style={{ overflow: "hiden" }}
    >
      <Grid container>
        {data?.pages.map((page, index) =>
          page.results.map((game) => (
            <Grid xl={3}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Grid>
          ))
        )}
      </Grid>
    </InfiniteScroll>
  )
}

export default GameGrid
