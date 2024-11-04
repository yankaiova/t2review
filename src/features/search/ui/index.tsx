import { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchExpert } from "@/entities/user";

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
    <FormControl>
      <SearchIcon
        type="submit"
        onClick={handleClick}
        color="disabled"
        style={{ cursor: "pointer" }}
      />
      <TextField
        id="search"
        type="text"
        label="Поиск..."
        variant="standard"
        value={currentSearchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentSearchValue(e.target.value)
        }
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />
    </FormControl>
  );
};
