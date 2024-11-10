import { Provider } from "react-redux";
import { store } from "../model/store";

export const AppStoreProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <Provider store={store}>{children}</Provider>;
};
