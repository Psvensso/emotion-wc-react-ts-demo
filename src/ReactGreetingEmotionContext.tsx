import { createContext, useContext } from "react";
import { Emotion } from "@emotion/css/create-instance";

export const ReactGreetingEmotionContext = createContext<Emotion>(
  {} as Emotion
);
export const useReactGreetingEmotion = () =>
  useContext(ReactGreetingEmotionContext);
