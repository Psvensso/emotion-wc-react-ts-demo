import createEmotion from "@emotion/css/create-instance";
import React, { createContext, useContext } from "react";
import { Emotion } from "@emotion/css/create-instance";

export const ReactGreetingEmotionContext = createContext<Emotion>(undefined);
export const useReactGreetingEmotion = () =>
  useContext(ReactGreetingEmotionContext);
