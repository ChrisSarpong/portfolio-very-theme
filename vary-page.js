/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ref } from "lit/directives/ref.js";

/**
 * `vary-page`
 *
 * @demo index.html
 * @element vary-page
 */
export class VaryPage extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "vary-page";
  }

  constructor() {
    //
    super();
    this.title =
      "fdf "; /* the title of the page should be linked to the button */
    this.description = "";
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String, reflect: true },
      description: { type: String, reflect: true },
      image: { type: String, reflect: true },
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
          /* background-color: var(--ddd-theme-accent); */
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--vary-page-label-font-size, var(--ddd-font-size-s));
        } /* // need to define image and description and image */
        .Pages {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          text-align: left;
          height: 100%;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-right: auto;
        }
        .img {
          width: 100%;
          height: auto;
          max-width: 600px;
          border-radius: 8px;
          margin-top: 0;
          margin-left: auto;
        }
        .Pages h1 {
          margin: 0;
          font-size: var(--ddd-font-size-xl);
        }
        .Pages p {
          margin: 0;
          margin-top: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
        }
        .Description {
          margin: 0;
          margin-top: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  // Lit render the HTML
  // using the slotted method so you can jsut call all of them in HTML
  render() {
    return html` <div class="wrapper">
      <div class="Pages">
        <div class="text-container">
          <h1>${this.title}</h1>
          <p>${this.description}</p>
        </div>
        <img
          src="${this.image}"
          alt="${this.title || "Page image"}"
          class="img"
        />
        <slot></slot>
      </div>
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

globalThis.customElements.define(VaryPage.tag, VaryPage);
