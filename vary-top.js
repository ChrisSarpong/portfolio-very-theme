/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `vary-top`
 *
 * @demo index.html
 * @element vary-top
 */
export class VaryTop extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "vary-top";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          overflow: hidden;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          text-align: center;
        }
        .button {
          text-decoration: none;
          background-color: var(--ddd-theme-default-landgrantBrown);
          color: var(--ddd-theme-default-slateMaxLight);
          border: none;
          padding: var(--ddd-spacing-2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: var(--ddd-font-size-xl);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 8;
        }
        .button:hover {
          background-color: var(--ddd-theme-primary);
          color: var(--ddd-theme-default-white);
        }
        h3 span {
          font-size: var(--vary-top-label-font-size, var(--ddd-font-size-s));
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    console.log("Rendering VaryTop");
    return html` <div class="wrapper">
      <a href="#Top" class="button">↑</a>
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(VaryTop.tag, VaryTop);
