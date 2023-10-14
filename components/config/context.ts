import { createContext } from "react";
import type { ContextValue } from "./types";
import { PREFIX_MUSAE } from "../../utils/class-name";

const Context = createContext<ContextValue>({
  messageHolder: null,
  prefix: PREFIX_MUSAE,
});

export default Context;
