/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `vary-header`
 *
 * @demo index.html
 * @element vary-header
 */
export class VaryHeader extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "vary-header";
  }

  constructor() {
    super();
    this.title = "";
    this.header = "";
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
      header: { type: Object },
      activeButton: { type: String }, //made for the stateful buttons
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
          /* background-color: var(--ddd-theme-accent); causing random box  */
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--vary-header-label-font-size, var(--ddd-font-size-s));
        }
        .header {
          /* // you need to make this a diffrent color
          // buttons do not stand out enough */
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--ddd-theme-accent);
          border: 3px solid var(--ddd-theme-default-keystoneBlack);
          position: fixed;
          /* //this mean that it will move with the page. */
          top: 0;
          left: 0;
          height: 100px;
          right: 0;
          z-index: 1;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        /* // issue: buttons are not filling to the space  */
        .button {
          background-color: var(--ddd-theme-default-keystoneYellow);
          color: var(--ddd-theme-default-keystoneBlack);
          border: none;
          padding: var(--ddd-spacing-2);
          margin: var(--ddd-spacing-6);
          flex: 1;
          max-width: 150px;
          /* // this is stopping it from speakding to the whole page, idk hot to change that  */
          min-width: 100px;
          text-align: center;
          box-sizing: border-box;
          border-radius: var(--ddd-border-radius);
          font-size: var(--ddd-font-size-lg);
        }
        .button:hover {
          background-color: var(--ddd-theme-default-keystoneBlack);
          color: var(--ddd-theme-default-keystoneYellow);
        }
        .button:active {
          background-color: var(--ddd-theme-default-keystoneYellow);
          color: var(--ddd-theme-default-keystoneBlack);
        }
      `,
    ];
  }

  // Lit render the HTML
  //one of the styles you wanted to add was have portfolio very theme fixed atop of the header
  render() {
    return html` <div class="wrapper">
      <!-- <h3><span>${this.t.title}:</span> ${this.title}</h3> -->
      <div class="header">
        <!-- <h3>${this
          .header}</h3>  If you want the page thing you use this -->
        <button class="button" @click="${() => (this.title = "About")}">
          Page One
        </button>
        <button class="button" @click="${() => (this.title = "Page Two")}">
          Page Two
        </button>
        <button class="button" @click="${() => (this.title = "Page Three")}">
          Page Three
        </button>
        <button class="button" @click="${() => (this.title = "Page Four")}">
          Page Four
        </button>
        <button class="button" @click="${() => (this.title = "Contact Me")}">
          Contact Me
        </button>
        <slot></slot>
      </div>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(VaryHeader.tag, VaryHeader);
