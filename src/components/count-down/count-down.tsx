import React, { useRef } from "react";
import { Button } from "../button";
import { Observable, type Subscriber } from "rxjs";
import { CountDownProps } from "./types";
import { useEvent, useMounted } from "@aiszlab/relax";

const CountDown = (props: CountDownProps) => {
  const trigger = useRef<Subscriber<unknown>>();
  const counter = useRef<Observable<unknown>>();

  useMounted(() => {
    counter.current = new Observable((subscribe) => {
      trigger.current = subscribe;
    });
  });

  const start = useEvent(() => {
    trigger.current?.next();
  });

  return <Button>send</Button>;
};

export default CountDown;
