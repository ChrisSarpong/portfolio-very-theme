/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.title = "Pages";
    this.description = "";
    this.image = "";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL(
          "./locales/@yourOrganization/portfolio-very-theme.ar.json",
          import.meta.url
        ).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      image: { type: String },
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
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--vary-page-label-font-size, var(--ddd-font-size-s));
        }
      `,
    ];
  }

  // Lit render the HTML
  // using the slotted method so you can jsut call all of them in HTML
  render() {
    return html` <div class="wrapper">
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <div class="Pages">
        <h1>Welcome to Page one</h1>
        <p>This is the first page of the Vary Page component.</p>
        <img
          src="${this.image || ""}"
          alt="${this.title || "Page image"}"
          class="img"
        />
        <div class="title">${this.title}</div>
        <div class="description"></div>
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
