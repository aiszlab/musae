interface Document {
  startViewTransition(updateCallback: () => Promise<void> | void): ViewTransition;
}

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}
