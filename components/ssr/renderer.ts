import { Observable, take, Subscriber, tap } from "rxjs";
import { createDOMRenderer, GriffelRenderer, renderToStyleElements } from "@griffel/react";
import { ReactElement } from "react";

export class Renderer {
  #renderer: Renderer | null = null;
  #sounder: Subscriber<never> | null = null;

  #styler: GriffelRenderer | null = null;
  #styles: ReactElement[] = [];

  constructor() {
    if (this.#renderer) return this.#renderer;

    new Observable<never>((sounder) => {
      this.#sounder = sounder;
    }).pipe(
      take(1),
      tap(() => {
        this.#styler = createDOMRenderer();
        this.#styles.push(...renderToStyleElements(this.#styler));
      })
    );

    this.#renderer = this;

    return this;
  }

  create() {
    this.#sounder?.next();
  }

  get styler() {
    return this.#styler;
  }
}
