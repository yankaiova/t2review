import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { getQuerySearch, getChosenOptions } from "../model/selectors";
import { setChosenOptions, setQuerySearch } from "../model/slice";
import { FilterOptions } from "../model/types";

export const useSearchExpert = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(getQuerySearch);
  const chosenOptions = useAppSelector(getChosenOptions);

  const setQuery = (str: string) => {
    dispatch(setQuerySearch(str));
  };
  const setOptions = (chosenOptions: Partial<FilterOptions>) => {
    dispatch(setChosenOptions(chosenOptions));
  };
  return { setQuery, setOptions, query, chosenOptions };
};
