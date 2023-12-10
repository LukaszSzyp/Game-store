import { useRef } from "react"
import { useTranslation } from "react-i18next"
import Icon from "@mui/material/Icon"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"

import useGamesQueryStore from "../store/gameStore"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGamesQueryStore((s) => s.setSearchText)
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate("/")
        }
      }}
    >
      <OutlinedInput
        fullWidth
        placeholder={t("homePage.header.searchPlaceholder")}
        startAdornment={
          <InputAdornment position="start">
            <Icon>search</Icon>
          </InputAdornment>
        }
        inputRef={ref}
      />
    </form>
  )
}

export default SearchInput
