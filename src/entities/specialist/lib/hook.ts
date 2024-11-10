import { useDispatch, useSelector } from "react-redux";
import { getQuerySearch, getChosenOptions } from "../model/selectors";
import { setChosenOptions, setQuerySearch } from "../model/slice";
import { FilterOptions } from "@/shared/model/types";

export const useSearchExpert = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuerySearch);
  const chosenOptions = useSelector(getChosenOptions);

  const setQuery = (str: string) => {
    dispatch(setQuerySearch(str));
  };
  const setOptions = (chosenOptions: Partial<FilterOptions>) => {
    dispatch(setChosenOptions(chosenOptions));
  };
  return { setQuery, setOptions, query, chosenOptions };
};
