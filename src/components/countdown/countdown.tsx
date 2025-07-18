import React, { type MouseEvent, useRef, useState } from "react";
import { Button } from "../button";
import { Observable, Subscription, interval, map, switchAll, type Subscriber } from "rxjs";
import type { CountdownProps } from "../../types/countdown";
import { useEvent, useMounted } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Countdown = ({
  count = 60,
  children,
  interval: _interval = 1000,
  disabled = false,
  variant = "filled",
  color = "primary",
  shape = "round",
  size = "medium",
  ripple = true,
  className,
  style,
  onClick,
}: CountdownProps) => {
  const trigger = useRef<Subscriber<MouseEvent<HTMLButtonElement>> | null>(null);
  const counter = useRef<Observable<number> | null>(null);
  const stopper = useRef<Subscription | null | undefined>(null);
  const classNames = useClassNames(CLASS_NAMES);

  const [counted, setCounted] = useState(0);
  const isCounting = counted > 0;

  const stop = useEvent(() => {
    stopper.current?.unsubscribe();
  });

  useMounted(() => {
    counter.current = new Observable<MouseEvent<HTMLButtonElement>>((subscribe) => {
      trigger.current = subscribe;
    })
      .pipe(map(() => interval(_interval)))
      .pipe(switchAll());

    return () => {
      stop();
      trigger.current?.complete();
      counter.current = null;
      stopper.current = null;
      trigger.current = null;
    };
  });

  const start = useEvent(async (e: MouseEvent<HTMLButtonElement>) => {
    await Promise.resolve(onClick?.(e));

    setCounted(count);

    stopper.current = counter.current?.subscribe((value) => {
      const _counted = Math.max(count - value - 1, 0);
      setCounted(_counted);

      if (_counted > 0) return;
      stop();
    });

    trigger.current?.next(e);
  });

  return (
    <Button
      onClick={start}
      disabled={disabled || isCounting}
      variant={variant}
      color={color}
      size={size}
      shape={shape}
      className={stringify(classNames.countdown, className)}
      style={style}
      ripple={ripple}
    >
      {isCounting ? counted : children}
    </Button>
  );
};

export default Countdown;
