import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getQuerySearch, getChosenOptions } from "../model/selectors";
import { setChosenOptions, setQuerySearch } from "../model/slice";

export const useSearchExpert = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuerySearch);
  const chosenOptions = useSelector(getChosenOptions);

  const setQuery = useCallback(
    (str: string) => {
      dispatch(setQuerySearch(str));
    },
    [dispatch, query]
  );
  const setOptions = useCallback(
    (chosenOptions: string[]) => {
      dispatch(setChosenOptions({ chosenOptions }));
    },
    [dispatch, chosenOptions]
  );
  return { setQuery, setOptions, query, chosenOptions };
};
