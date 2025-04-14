/**
 * Copyright 2025 brookeconnelly05
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDDPulseEffectSuper, DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {

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
        display: inline-block;
        margin:var(--ddd-spacing-2);
      border-radius: var(--ddd-radius-sm);
      overflow: hidden;
      width: 400px;
      background: #fff;
        color: var(--ddd-theme-default-coalyGray);
        /* background-color: var(--ddd-theme-accent); */
        font-family: var(--ddd-font-navigation); 
      }
      .card-header{
        width:100%;
        height:600px;
        display:flex;
        flex-direction: column;
       
        /* background-color:var(--ddd-theme-default-shrineLight); */
      }
      .card-header img {
      width: 100%;
      height: auto;
      display: block;
      /* border-bottom: var(--ddd-theme-primary) 15px solid; */
    }
    

    .bar{
      display:flex;
      bottom:var(--ddd-spacing-0);
      width:100%;
      height: 10px;
      background-color: var(--ddd-primary-2);
    }
    .card-content {
      padding: var(--ddd-spacing-4);
    }
    .card-footer {
      height: 8px;
      background: var(--ddd-primary, #0072ce);
    }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      .image{
        position: relative;
        width: 100%;
        overflow: hidden;

      }
      button {
          width: 100%;
          background-color:var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-white);
          border: var(--ddd-border-0);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }
      
        .link {
        display: block;
        text-align: center;
        padding: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-beaverBlue);
        color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-sm);
        transition: background-color 0.3s ease-in-out;
      }

      .link a {
        
        font-weight: var(--ddd-font-weight-regular);
        font-family: var(--ddd-font-primary);
        text-decoration: none;
        
      }
      .link:hover button {
  background-color: var(--ddd-primary-2);
}

      .link:hover {
        background-color: var(--ddd-primary-2);
      }
      
      .button-holder {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px; /* Adjust spacing */
        }


       
        p{
          height: 100px;
        }


  
        
      
     
    `];
  }

  // Lit render the HTML
  render() {
    return html`
 <div class="card-header">
  <div class="imgage">
        <img src="${this.image}" alt="${this.title}" />
        <div class="bar"></div>
        </div>
      
      
      <!-- <div class="card-footer" style="background: ${this.dddPrimary ? `var(--ddd-primary-${this.dddPrimary})` : 'var(--ddd-primary, #0072ce)'}"></div> -->
      <div class="card-content">
        <h3 class="card-title">${this.title}</h3>
        <p class="card-label">${this.label}</p>


        <div class="link">
          <div class="button-holder">
          <button @click=${this.clickEvent}>Explore ></button>
          </div>
          </div>
       <!-- <button>

       
        <a href="${this.link}" target="_blank">Explore > </a>
        </button> -->
      </div>
      </div>
      
`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }
  clickEvent() {
    window.open(this.link);
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);