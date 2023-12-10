import { Grid, Typography } from "@mui/material"

import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCardContainer from "./GameCardContainer"
import GameCard from "./GameCard"
import Spinner from "./Spinner"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()

  if (error) return <Typography>{error.message}</Typography>

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  const skeletons = [...Array(4 * 4).keys()]

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage} //!!hasNextPage
      next={() => fetchNextPage()}
      loader={<Spinner />}
      style={{ overflow: "hiden" }}
    >
      <Grid container>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid xl={3} key={skeleton}>
              <GameCardContainer>
                <GameCardSkeleton />
              </GameCardContainer>
            </Grid>
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => (
            <Grid xl={3} key={game.id}>
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
