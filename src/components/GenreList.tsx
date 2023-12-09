import { Box, Button, List, ListItem, Typography } from "@mui/material"

import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGamesQueryStore from "../store"
import Spinner from "./Spinner"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const selectedGenreId = useGamesQueryStore((s) => s.gameQuery.genreId)
  const setSelectedGenreId = useGamesQueryStore((s) => s.setGenreId)
  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Typography
        variant="h5"
        marginTop={9}
        marginBottom={3}
        textAlign="center"
      >
        Genres
      </Typography>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap={1}
              width="100%"
            >
              <img
                height="32px"
                width="32px"
                style={{ borderRadius: "8px" }}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fullWidth
                style={{
                  fontWeight: genre.id === selectedGenreId ? "bold" : "normal",
                }}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
