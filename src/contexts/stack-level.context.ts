import { createContext, type CSSProperties, useContext } from "react";

/**
 * 全局处理纵向堆叠高度
 */
const StackLevelContext = createContext<{ className?: string; style?: CSSProperties }>({});

const useStackLevelContextContext = () => {
  return useContext(StackLevelContext);
};

export default StackLevelContext;
export { useStackLevelContextContext };
