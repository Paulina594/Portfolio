import {
  concat,
  concatMap,
  delay,
  from,
  ignoreElements,
  interval,
  map,
  Observable,
  of,
  repeat,
  take,
} from "rxjs";
import { useEffect, useState } from "react";

export type TypewriterProps = {
  words: string[];
};

export const Typewriter = (props: TypewriterProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const wordRoulette$ = from(props.words).pipe(
      concatMap((word) => createDelayedTypeEffect(word)),
      repeat()
    );

    const sub = wordRoulette$.subscribe((word) => setText(word));

    return () => sub.unsubscribe();
  }, [props.words]);

  return (
    <>
      <div className="imp gradient-text">{text}</div>
    </>
  );
};

function createDelayedTypeEffect(word: string): Observable<string> {
  return concat(
    createWordWriter(word, 200),
    createDelay(1200),
    createWordWriter(word, 100, true)
  );
}

function createDelay(delayTime: number): Observable<any> {
  return of("").pipe(delay(delayTime), ignoreElements());
}

function createWordWriter(
  word: string,
  speed: number,
  backwards = false
): Observable<string> {
  return interval(speed).pipe(
    map((i) => {
      if (backwards) {
        return word.slice(0, word.length - i - 1);
      } else {
        return word.substring(0, i + 1);
      }
    }),
    take(word.length)
  );
}
