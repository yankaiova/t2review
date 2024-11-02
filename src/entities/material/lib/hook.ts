import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getMaterialLinks } from "../model/selectors";
import { addToMaterials, removeFromMaterials } from "../model/slice";

export const useMaterials = () => {
  const dispatch = useDispatch();
  const links = useSelector(getMaterialLinks);

  const addLink = useCallback(
    (link: string) => {
      dispatch(addToMaterials(link));
    },
    [dispatch, links]
  );

  const removeLink = useCallback(
    (link: string) => {
      dispatch(removeFromMaterials(link));
    },
    [dispatch, links]
  );

  return { links, addLink, removeLink };
};
