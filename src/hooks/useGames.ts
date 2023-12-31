import { useInfiniteQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import useGamesQueryStore from "../store/gameStore"
import Game from "../entities/Game"

const apiClient = new APIClient<Game>("/games")

const useGames = () => {
  const gameQuery = useGamesQueryStore((s) => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })
}
export default useGames
