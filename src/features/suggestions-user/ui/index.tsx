import { SuggestionsUI } from "@/shared/ui";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { useDebounce, useSuggestions } from "@/shared/lib/hooks";

const Suggestions = ({ value, isOpen }: { value: string; isOpen: boolean }) => {
  const { suggestions, currentSuggestions, setCurrentSuggestions } =
    useSuggestions(value);

  return (
    <SuggestionsUI
      suggestions={suggestions}
      currentSuggestions={currentSuggestions}
      setCurrentSuggestions={setCurrentSuggestions}
      isOpen={isOpen}
    />
  );
};

export const SelectUsers = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const onFocus = () => setIsOpen(true);

  const onBlur = () => setTimeout(() => setIsOpen(false), 200);
  const debounceValue = useDebounce(name, 200);
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ position: "relative", height: "150px" }}>
        <TextField
          value={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {debounceValue && <Suggestions value={debounceValue} isOpen={isOpen} />}
      </Box>
    </Box>
  );
};
