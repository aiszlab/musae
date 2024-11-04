import { Observable } from "rxjs";

/**
 * @description
 * chat item props
 */
export interface ChatItemProps {
  /**
   * @description
   * message
   */
  message: string;
}

/**
 * @description
 * chat props
 */
export interface ChatProps {
  /**
   * @description onMessage
   */
  onMessage: (message: string) => string;
}
