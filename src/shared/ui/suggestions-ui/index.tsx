import { User } from "@/shared/model/types";
import { Checkbox, MenuItem, ListItemText } from "@mui/material";
import style from "./index.module.css";

type PropsSuggestionsUI = {
  suggestions: User[];
  currentSuggestions: User[];
  setCurrentSuggestions: React.Dispatch<React.SetStateAction<User[]>>;
  isOpen: boolean;
};
export const SuggestionsUI = ({
  suggestions,
  currentSuggestions,
  setCurrentSuggestions,
  isOpen,
}: PropsSuggestionsUI) => {
  if (!suggestions) return;

  const handleChange = (user: User) => {
    if (currentSuggestions.includes(user)) {
      const newPersonName = currentSuggestions.filter((item) => item !== user);
      setCurrentSuggestions(newPersonName);
    } else {
      setCurrentSuggestions([...currentSuggestions, user]);
    }
  };

  return (
    <>
      {" "}
      {isOpen && (
        <div className={style.box}>
          {suggestions.map((item: User) => (
            <MenuItem key={item.user_id} onClick={() => handleChange(item)}>
              <Checkbox checked={currentSuggestions.includes(item)} />
              <ListItemText primary={item.firstName + " " + item.lastName} />
            </MenuItem>
          ))}
        </div>
      )}
      {currentSuggestions && (
        <div className={style.row}>
          {currentSuggestions.map((item) => (
            <MenuItem key={item.user_id} onClick={() => handleChange(item)}>
              <Checkbox checked={currentSuggestions.includes(item)} />
              <ListItemText primary={item.firstName + " " + item.lastName} />
            </MenuItem>
          ))}
        </div>
      )}
    </>
  );
};
