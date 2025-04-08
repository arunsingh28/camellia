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
  parameter_format: "POSITIONAL" | "NAMED";
  components: WhatsAppComponent[];
  language: string;
  status: "APPROVED" | "PENDING" | "REJECTED" | string;
  category: "MARKETING" | "UTILITY" | string;
  sub_category?: string;
  id: string;
}

export type WhatsAppComponent =
  | WhatsAppHeaderComponent
  | WhatsAppBodyComponent
  | WhatsAppFooterComponent
  | WhatsAppButtonsComponent;

export interface WhatsAppHeaderComponent {
  type: "HEADER";
  format: "TEXT";
  text: string;
  example?: {
    header_text?: string[];
    header_text_named_params?: NamedParamExample[];
  };
}

export interface WhatsAppBodyComponent {
  type: "BODY";
  text: string;
  example?: {
    body_text?: string[][];
  };
}

export interface WhatsAppFooterComponent {
  type: "FOOTER";
  text: string;
}

export interface WhatsAppButtonsComponent {
  type: "BUTTONS";
  buttons: WhatsAppButton[];
}

export type WhatsAppButton =
  | {
      type: "URL";
      text: string;
      url: string;
    }
  | {
      type: "PHONE_NUMBER";
      text: string;
      phone_number: string;
    };

export interface NamedParamExample {
  param_name: string;
  example: string;
}

interface FlowScreen {
  id: string;
  layout: object;
  title?: string;
  terminal?: boolean;
  success?: boolean;
  data?: object;
}

interface RoutingModel {
  [screenId: string]: {
    next: string[];
  };
}

export interface CreateFlowParams {
  name: string;
  description?: string;
  screens: FlowScreen[];
  routingModel: RoutingModel;
  dataApiVersion?: string;
  endpointUrl?: string;
}

export interface WhatsAppTextMessageResponse {
  messaging_product: "whatsapp";
  contacts: {
    input: string;
    wa_id: string;
  }[];
  messages: {
    id: string;
  }[];
}

// type ParameterType = "text";

type ParamMode = "NAMED_PARAMETER_INPUT" | "POSITIONAL_PARAMTER_INPUT";

export interface NamedVariable {
  parameter_name: string;
  text: string;
}

export interface PositionalVariable {
  text: string;
}

interface NamedSenderInput {
  phone_number: string;
  languageCode?: string;
  paramMode: "NAMED_PARAMETER_INPUT";
  bodyVariables?: NamedVariable[];
  headerVariables?: NamedVariable[];
}

interface PositionalSenderInput {
  phone_number: string;
  languageCode?: string;
  paramMode: "POSITIONAL_PARAMTER_INPUT";
  bodyVariables?: PositionalVariable[];
  headerVariables?: PositionalVariable[];
}

export type SenderInput = NamedSenderInput | PositionalSenderInput;

export interface WhatsAppApiErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
    fbtrace_id: string;
  };
}
