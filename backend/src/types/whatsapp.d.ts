export interface WhatsAppTemplateResponse {
    data: WhatsAppTemplate[];
    paging: {
      cursors: {
        before: string;
        after: string;
      };
    };
  }
  
  export interface WhatsAppTemplate {
    name: string;
    parameter_format: 'POSITIONAL' | 'NAMED';
    components: WhatsAppComponent[];
    language: string;
    status: 'APPROVED' | 'PENDING' | 'REJECTED' | string;
    category: 'MARKETING' | 'UTILITY' | string;
    sub_category?: string;
    id: string;
  }
  
  export type WhatsAppComponent =
    | WhatsAppHeaderComponent
    | WhatsAppBodyComponent
    | WhatsAppFooterComponent
    | WhatsAppButtonsComponent;
  
  export interface WhatsAppHeaderComponent {
    type: 'HEADER';
    format: 'TEXT';
    text: string;
    example?: {
      header_text?: string[];
      header_text_named_params?: NamedParamExample[];
    };
  }
  
  export interface WhatsAppBodyComponent {
    type: 'BODY';
    text: string;
    example?: {
      body_text?: string[][];
    };
  }
  
  export interface WhatsAppFooterComponent {
    type: 'FOOTER';
    text: string;
  }
  
  export interface WhatsAppButtonsComponent {
    type: 'BUTTONS';
    buttons: WhatsAppButton[];
  }
  
  export type WhatsAppButton =
    | {
        type: 'URL';
        text: string;
        url: string;
      }
    | {
        type: 'PHONE_NUMBER';
        text: string;
        phone_number: string;
      };
  
  export interface NamedParamExample {
    param_name: string;
    example: string;
  }
  