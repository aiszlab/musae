import { createContext } from "react";
import { type ContextValue } from "./types";

const MenuContext = createContext<ContextValue | null>(null);

export default MenuContext;
