import { ComponentProps } from "./element";

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

  /**
   * @description
   * content
   */
  content?: string;
}

interface MessageReceiver {
  (
    send: string,
    receiver: {
      next: (content: string) => void;
      complete: () => void;
      error: (error: Error) => void;
    },
  ): void;

  /**
   * @description
   * override
   */
  override?: boolean;
}

/**
 * @description
 * chat props
 */
export interface ChatProps extends ComponentProps {
  /**
   * @description
   * message handler
   */
  onMessage?: MessageReceiver;

  /**
   * @description
   * history messages
   */
  defaultValue?: Required<ChatItemProps>[];
}

/**
 * @description
 * message handler like `rxjs`
 */
export interface ContextValue {
  /**
   * @description
   * message handler
   */
  onMessage?: MessageReceiver;
}
