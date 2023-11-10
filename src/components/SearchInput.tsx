import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import Icon from "@mui/material/Icon"

const SearchInput = () => {
  return (
    <OutlinedInput
      fullWidth
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <Icon>search</Icon>
        </InputAdornment>
      }
    />
  )
}

export default SearchInput
