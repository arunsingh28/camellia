export interface IWhatsAppWebhook {
    object: string;
    entry: Entry[];
  }
  
  interface Entry {
    id: string;
    changes: Change[];
  }
  
  interface Change {
    value: ChangeValue;
    field: string;
  }
  
  interface ChangeValue {
    messaging_product: string;
    metadata: Metadata;
    contacts?: Contact[];
    messages?: Message[];
  }
  
  interface Metadata {
    display_phone_number: string;
    phone_number_id: string;
  }
  
  interface Contact {
    profile: Profile;
    wa_id: string;
  }
  
  interface Profile {
    name: string;
  }
  
  interface Message {
    from: string;
    id: string;
    timestamp: string;
    type: MessageType;
    text?: TextContent;
    image?: MediaContent;
    video?: MediaContent;
    audio?: AudioContent;
    document?: DocumentContent;
    location?: LocationContent;
  }
  
  type MessageType = "text" | "image" | "video" | "audio" | "document" | "location";
  
  interface TextContent {
    body: string;
  }
  
  interface MediaContent {
    mime_type: string;
    sha256: string;
    id: string;
  }
  
  interface AudioContent extends MediaContent {
    voice?: boolean;
  }
  
  interface DocumentContent extends MediaContent {
    filename: string;
  }
  
  interface LocationContent {
    latitude: number;
    longitude: number;
  }
  

  export const WhatsAppWebhookSchema = {
    type: "object",
    properties: {
      object: { type: "string" },
      entry: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            changes: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  field: { type: "string" },
                  value: {
                    type: "object",
                    properties: {
                      messaging_product: { type: "string" },
                      metadata: {
                        type: "object",
                        properties: {
                          display_phone_number: { type: "string" },
                          phone_number_id: { type: "string" },
                        },
                        required: ["display_phone_number", "phone_number_id"],
                      },
                      contacts: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            wa_id: { type: "string" },
                            profile: {
                              type: "object",
                              properties: {
                                name: { type: "string" },
                              },
                            },
                          },
                        },
                      },
                      messages: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            from: { type: "string" },
                            id: { type: "string" },
                            timestamp: { type: "string" },
                            type: { type: "string" },
                            text: {
                              type: "object",
                              properties: {
                                body: { type: "string" },
                              },
                              required: ["body"],
                            },
                            location: {
                              type: "object",
                              properties: {
                                latitude: { type: "number" },
                                longitude: { type: "number" },
                              },
                            },
                            image: {
                              type: "object",
                              properties: {
                                mime_type: { type: "string" },
                                sha256: { type: "string" },
                                id: { type: "string" },
                              },
                            },
                            video: {
                              type: "object",
                              properties: {
                                mime_type: { type: "string" },
                                sha256: { type: "string" },
                                id: { type: "string" },
                              },
                            },
                            audio: {
                              type: "object",
                              properties: {
                                mime_type: { type: "string" },
                                sha256: { type: "string" },
                                id: { type: "string" },
                                voice: { type: "boolean" },
                              },
                            },
                            document: {
                              type: "object",
                              properties: {
                                filename: { type: "string" },
                                mime_type: { type: "string" },
                                sha256: { type: "string" },
                                id: { type: "string" },
                              },
                            },
                          },
                        },
                      },
                    },
                    required: ["messaging_product", "metadata", "contacts", "messages"],
                  },
                },
              },
            },
          },
        },
      },
    },
    required: ["object", "entry"],
  };
  