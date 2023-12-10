import { useQuery } from "@tanstack/react-query"
import Game from "../entities/Game"
import APIClient from "../services/api-client"

const apiClient = new APIClient<Game>("/games")
const useGameItem = (gameId: number) =>
  useQuery({
    queryKey: ["games", gameId],
    queryFn: () => apiClient.get(gameId),
  })

export default useGameItem
