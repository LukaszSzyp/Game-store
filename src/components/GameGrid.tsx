import { Grid, Typography } from "@mui/material"

import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCardContainer from "./GameCardContainer"
import GameCard from "./GameCard"
import Spinner from "./Spinner"

const GameGrid = () => {
  const { data, error, fetchNextPage, hasNextPage } = useGames()

  if (error) return <Typography>{error.message}</Typography>

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage} //!!hasNextPage
      next={() => fetchNextPage()}
      loader={<Spinner />}
      style={{ overflow: "hiden" }}
    >
      <Grid container>
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
