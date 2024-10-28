import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
  const [currentSearchValue, setCurrentSearchValue] = useState<string>("");
  const onSubmit = (search: string) => {
    if (search.trim()) {
      //запрос на бэк
      //разворачиваем список экспертов
      //очищаем поле ввода
    }
  };

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onSubmit(currentSearchValue);
  }

  function handleKeyPress(e: React.KeyboardEvent, value: string) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
    }
  }

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #E2E2EA",
      }}
    >
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
        onKeyDown={(e) => handleKeyPress(e, currentSearchValue)}
        autoComplete="off"
      />
    </form>
  );
};
