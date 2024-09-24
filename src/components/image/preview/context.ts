import { createContext } from "react";
import type { PreviewGroupContextValue } from "musae/types/image";

const PreviewGroupContext = createContext<PreviewGroupContextValue | null>(null);

export default PreviewGroupContext;
