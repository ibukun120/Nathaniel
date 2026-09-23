import { Fragment } from "react";

type Props = {
  text: string;
  /** Extra classes for each word's inner span (e.g. an accent colour). */
  wordClassName?: string;
};

/**
 * Renders each word inside an overflow-hidden mask so textReveal() can raise it
 * into view. Words stay real text separated by spaces, so wrapping, copy/paste
 * and screen readers behave exactly like a normal heading.
 */
export default function SplitWords({ text, wordClassName = "" }: Props) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] pr-[0.12em] -mb-[0.12em] -mr-[0.08em] align-bottom">
            <span data-word className={`inline-block ${wordClassName}`}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
