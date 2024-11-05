import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchExpert } from "@/entities/user";
const style = { width: "100%", marginBottom: "30px" };
export const SearchForm = () => {
  const { setQuery } = useSearchExpert();
  const [currentSearchValue, setCurrentSearchValue] = useState<string>("");

  const onSubmit = () => {
    if (currentSearchValue.trim()) {
      setQuery(currentSearchValue);
    }
  };

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onSubmit();
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <form>
      <TextField
        id="search"
        type="text"
        slotProps={{
          input: {
            startAdornment: (
              <SearchIcon
                fontSize="small"
                onClick={handleClick}
                color="disabled"
              />
            ),
          },
        }}
        placeholder="Поиск..."
        variant="standard"
        sx={style}
        value={currentSearchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentSearchValue(e.target.value)
        }
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />
    </form>
  );
};
