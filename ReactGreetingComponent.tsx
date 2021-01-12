import React from "react";
import { useReactGreetingEmotion } from "./ReactGreetingEmotionContext";
import styles from "./ReactGreetingComponent.module.css";

export const Greeting = ({ name }) => {
  const { css } = useReactGreetingEmotion();
  console.log(styles);
  return (
    <p
      className={css`
        color: hotpink;
      `}
    >
      Hello, {name}!
    </p>
  );
};
