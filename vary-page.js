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
          /* background-color: var(--ddd-theme-default-white);  */
          width: 100vw; /* this means viewpoint */
          height: 100vh;
          box-sizing: border-box;
          overflow: hidden;
          font-family: var(--ddd-font-navigation);
          margin: 0;
          padding: 0;
        }
        :host([id="page-one"]){
          background-color: var(--ddd-theme-default-navy40);
          color: var(--ddd-theme-default-coalyGray);
        }
        :host([id="page-two"]){
          background-color: var(--ddd-theme-default-navy60);
          color: var(--ddd-theme-default-coalyGray);
        }
        :host([id="page-three"]){
          background-color: var(--ddd-theme-default-navy65);
          color: var(--ddd-theme-default-coalyGray);
        }
        :host([id="page-four"]){
          background-color: var(--ddd-theme-default-navy70);
          color: var(--ddd-theme-default-coalyGray);
        }
        :host([id="page-five"]){
          background-color: var(--ddd-theme-default-navy80);
          color: var(--ddd-theme-default-coalyGray);
        }
        .wrapper {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column; /* added to fix over flow*/
          justify-content: center; /* added to fix over flow*/
          align-items: center; /* added to fix over flow*/
          box-sizing: border-box;
          /* margin: var(--ddd-spacing-2); removed to let items fill page ?
          padding: var(--ddd-spacing-4); */
        }
        h3 span {
          font-size: var(--vary-page-label-font-size, var(--ddd-font-size-s));
        }
        .Pages {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: left;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          padding: var(--ddd-spacing-4);
          box-sizing: border-box;
          gap: var(--ddd-spacing-4); /* add padding to the image */
          /* overflow: hidden; */
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          /* margin-right: auto; */
        }
        .img {
          /* add styling to image here. Add boarder */
          width: auto;
          height: auto;
          max-width: 400px;
          object-fit: contain;
          border-radius: 8px;
          border: 3px solid var(--ddd-theme-default-beaverBlue);
          flex-shrink: 0;
          /* margin-top: 0;
          box-sizing: auto;
          margin-left: auto; */
        }
        .Pages h1 {
          margin: 0;
          font-size: var(--ddd-font-size-xl);
        }
        .Pages p {
          margin: 0;
          margin-top: 0;
          font-size: var(--ddd-font-size-l);
        }
        .Description {
          margin: 0;
          margin-top: var(--ddd-spacing-2);
        }
        .resume-button {
          /*added for the resume button */
          margin-top: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          background-color: var(--ddd-theme-accent);
          color: var(--ddd-theme-default-coalyGray);
          border: none;
          border-radius: var(--ddd-border-radius);
          font-size: var(--ddd-font-size-m);
          cursor: pointer;
        }
        .resume-button:hover {
          background-color: var(--ddd-theme-default-beaver70);
          color: var(--ddd-theme-accent);
        }
        @media (max-width: 768px) {
          .Pages {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .img {
            max-width: 100%;
            margin-top: var(--ddd-spacing-2);
          }
          .text-container {
            align-items: center;
            text-align: center;
          }
          .resume-button {
            width: 100%;
            max-width: 300px;
        }
      `,
    ];
  }

  // Lit render the HTML
  // using the slotted method so you can jsut call all of them in HTML
  // added resume button to this this page at line 144
  render() {
    return html` <div class="wrapper">
      <div class="Pages">
        <div class="text-container">
          <h1>${this.title}</h1>
          <p>${this.description}</p>
          ${this.title === "Resume"
            ? html`<button
                class="resume-button"
                @click="${this._handleResumeClick}"
              >
                Download Resume
              </button>`
            : ""}
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
  _handleResumeClick() {
    // Hopefully this will open the resume in a new tab
    window.open("./Sarpong.Resume.jpg", "_blank");
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
