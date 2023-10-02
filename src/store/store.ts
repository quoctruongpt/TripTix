import { createContext } from "react";

export const rootStore = {
}

export type TRootStore = typeof rootStore;
export const RootStoreContext = createContext<null | TRootStore>(null)