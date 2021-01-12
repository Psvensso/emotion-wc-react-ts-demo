import { LitElement, property, customElement } from "lit-element";
import React from "react";
import createEmotion from "@emotion/css/create-instance";
import { render } from "react-dom";
import { ReactGreetingEmotionContext } from "./ReactGreetingEmotionContext";
import { Greeting } from "./ReactGreetingComponent";

@customElement("nb-react-greeting")
export class SimpleReactGreeting extends LitElement {
  @property() name = "World";
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    const emotionInstance = createEmotion({
      container: this.shadowRoot as any,
      key: "nb-react-greeting",
      speedy: true,
    });

    render(
      <ReactGreetingEmotionContext.Provider value={emotionInstance}>
        <Greeting name={this.name} />
      </ReactGreetingEmotionContext.Provider>,
      this.shadowRoot
    );
  }
}
