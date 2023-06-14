import { Provider } from "react-redux";
import { store } from "./store";

import React, { ReactElement } from "react";

interface IProps {
  children: ReactElement | ReactElement[];
}

const Providers = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
