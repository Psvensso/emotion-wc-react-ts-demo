import React from "react";
import { useReactGreetingEmotion } from "./ReactGreetingEmotionContext";
import x from "./ReactGreetingComponent.css";

export const Greeting = ({ name }: { name: string }) => {
  const { css } = useReactGreetingEmotion();
  const base = css`
    ${x.toString()}
  `;
  console.log(base);
  console.log(x.toString());
  return (
    <div
      className={css`
        ${base}
        color: hotpink;
      `}
    >
      <p>Hello, {name}!</p>
    </div>
  );
};
