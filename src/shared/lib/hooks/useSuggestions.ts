import { useState, useEffect } from "react";
import { users } from "@/mocks";
import { User } from "@/shared/model/types";

export const useSuggestions = (value: string) => {
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const getUsersByName = (valueC: string) => {
    return users.filter((item: User) => {
      const name = item.firstName + " " + item.lastName;
      if (name.includes(valueC)) {
        return item;
      }
    });
  };
  const [currentSuggestions, setCurrentSuggestions] = useState<User[]>([]);
  useEffect(() => {
    const data = getUsersByName(value);
    setSuggestions(data);
  }, [value]);
  return { suggestions, currentSuggestions, setCurrentSuggestions };
};
