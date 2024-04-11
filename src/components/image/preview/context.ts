import { createContext } from "react";
import type { PreviewGroupContextValue } from "../types";

const PreviewGroupContext = createContext<PreviewGroupContextValue | null>(null);

export default PreviewGroupContext;
