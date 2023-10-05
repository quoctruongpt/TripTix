import { createContext } from "react";
import { Authentication } from "./AuthenticationStore";

export const rootStore = {
  authentication: new Authentication(),
};

export type TRootStore = typeof rootStore;
export const RootStoreContext = createContext<null | TRootStore>(null);
