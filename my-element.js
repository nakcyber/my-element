import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: red;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-element',
      },
    };
  }
}

window.customElements.define('my-element', MyElement);
