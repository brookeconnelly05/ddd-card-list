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
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
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
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { type: String, attribute: 'ddd-primary' },
    dddAccent: { type: String, attribute: 'ddd-accent' },
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('dddPrimary')) {
      this.updateCardProperties();
    }
  }

  updateCardProperties() {
    this.querySelectorAll('ddd-card').forEach(card => {
      card.dddPrimary = this.dddPrimary;
    });
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

      :host {
      display: block;
      flex-wrap: wrap;
      gap: var(--ddd-spacing-4);
      padding: var(--ddd-spacing-4);
      background: var(--ddd-accent, #f5f5f5);


      
    }
    :host {
        background-color: var(--ddd-accent, #f5f5f5);
        padding: var(--ddd-spacing-2);
        box-sizing: border-box;
      }
      div ::slotted(*) {
          display: inline-block;
          margin: 0 10px 10px 0; 
          box-shadow:  var( --ddd-boxShadow-sm);
        }

      .card-grid {
        display: grid;
        margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-40);
        gap: var(--ddd-spacing-2);
        grid-template-columns: repeat(auto-fit, minmax(395px, 1fr));
        justify-content: flex-start;
      }

      /* @media (min-width: 1024px) {
        .card-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        .card-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 767px) {
        .card-grid {
          grid-template-columns: 1fr;
        }
      } */
    
      
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
 <div class="card-grid" style="background-color: var(--ddd-accent-${this.dddAccent}, ${this.dddPrimary});">
        <slot></slot>
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

globalThis.customElements.define(DddCardList.tag, DddCardList);