import { LitElement, html, property, customElement } from "lit-element";

@customElement("nb-greeting")
export class SimpleGreeting extends LitElement {
  @property() name = "World";

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
