/**
 * Copyright 2025 brookeconnelly05
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.label = '';
    this.link = '';
    this.image='';
    this.dddAccent = '';
    this.dddPrimary = '';
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      label: { type: String },
      link: { type: String },
      image: { type: String },
      dddPrimary: { type: String, attribute: 'ddd-primary' },
    dddAccent: { type: String, attribute: 'ddd-accent' },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      max-width: 300px;
      background: #fff;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation); 
      }
      .card-header img {
      width: 100%;
      height: auto;
      display: block;
    }
    .card-content {
      padding: 16px;
    }
    .card-footer {
      height: 8px;
      background: var(--ddd-primary, #0072ce);
    }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
 <div class="card-header">
        <img src="${this.image}" alt="${this.title}" />
      </div>
      <div class="card-footer" style="background: ${this.dddPrimary ? `var(--ddd-primary-${this.dddPrimary})` : 'var(--ddd-primary, #0072ce)'}"></div>
      <div class="card-content">
        <h3 class="card-title">${this.title}</h3>
        <p class="card-label">${this.label}</p>
        <a href="${this.link}" target="_blank">Learn More</a>
      </div>
      
`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);