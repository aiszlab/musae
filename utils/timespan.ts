import { Dayjs } from "dayjs";

interface Props {
  from?: Dayjs;
  to?: Dayjs;
}

export class Timespan {
  #from?: Dayjs;
  #to?: Dayjs;

  constructor(props: Props) {
    // sort
    const [from, to] = [props.from, props.to].sort((prev, next) => (prev?.isAfter(next) ? 1 : 0));

    // convert years
    this.#from = from?.clone();
    this.#to = to?.clone();
  }

  isFrom(now: Dayjs) {
    return !!this.#from?.isSame(now, "day");
  }

  isTo(now: Dayjs) {
    return !!this.#to?.isSame(now, "day");
  }

  isBetween(now: Dayjs) {
    return !!this.#to?.isAfter(now, "day") && !!this.#from?.isBefore(now, "day");
  }

  get isRange() {
    return this.#to && this.#from && !this.#to.isSame(this.#from);
  }
}
